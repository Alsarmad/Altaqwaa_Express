const { Telegraf } = require('telegraf');
const fs = require('fs-extra');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sqlite3 = require('sqlite3');
const downloadFile = require('./downloadFile.js');
const moment = require('moment');

module.exports = async function Telegram() {

    let options = { channelMode: true, polling: true }
    let Settings = fs.readJSONSync('./Settings.json');
    let localhost = Settings.localhost
    let bot = new Telegraf(Settings.Token, options)
    let sequelize = new Sequelize({
        dialect: 'sqlite',
        dialectModule: sqlite3,
        storage: './db.sqlite3',
        logging: false
    });

    let Posts = sequelize.define('Posts', {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
        file: DataTypes.STRING,
        type: DataTypes.STRING,
        username: DataTypes.STRING,
        name: DataTypes.STRING,
        telegramid: DataTypes.INTEGER,
        time: DataTypes.STRING
    }, {
        createdAt: false,
        updatedAt: false
    });

    let Users = sequelize.define('Users', {
        type: DataTypes.STRING,
        username: DataTypes.STRING,
        name: DataTypes.STRING,
        telegramid: DataTypes.INTEGER,
    }, {
        createdAt: false,
        updatedAt: false
    });

    await sequelize.sync();
    moment.locale('ar');

    bot.start((ctx) => ctx.reply('مرحبا بك من فضلك أرسل مقطع فيديو او صوره مع التعليق لرفعها على موقع التقوى'))


    bot.on("my_chat_member", async (ctx) => {


        let id = ctx.chat.id;
        let username = ctx.chat.username ? ctx.chat.username : null;
        let first_name = ctx.chat.first_name ? ctx.chat.first_name : ctx.chat.last_name ? ctx.chat.last_name : ctx.chat.title ? ctx.chat.title : null;
        let type = ctx.chat.type
        let GetUsers = await Users.findAll();

        if (ctx.update.my_chat_member.new_chat_member.status === 'member' || ctx.update.my_chat_member.new_chat_member.status === 'administrator') {

            if (GetUsers.some(e => e.dataValues.telegramid.toString().includes(id)) === false || GetUsers.length === 0) {

                await Users.create({
                    type: type,
                    username: username,
                    name: first_name,
                    telegramid: id
                })
                console.log(`join  ${id}`);

            }

        }

        else if (ctx.update.my_chat_member.new_chat_member.status === 'left' || ctx.update.my_chat_member.new_chat_member.status === 'kicked') {

            if (GetUsers.some(e => e.dataValues.telegramid.toString().includes(id))) {

                await Users.destroy({ where: { telegramid: id }, force: true });
                console.log(`left ${id}`);
            }

        }

    });

    bot.on('video', async (ctx) => {

        let number = NumberMx(25)
        let body = ctx.message.caption ? ctx.message.caption : null
        let title = number
        let fid = ctx.message.video
        let file_express = `./files/video/${number}.mp4`
        let PathFile = `./public/files/video/${number}.mp4`
        let type = 'video'
        let name = ctx.from.first_name ? ctx.from.first_name : ctx.from.last_name ? ctx.from.last_name : ctx.chat.title ? ctx.chat.title : null;
        let username = ctx.from.username ? ctx.from.username : name;
        let telegramid = ctx.from.id;
        let time = moment().format('L');
        let message_id = ctx.message.message_id;
        let getFile = await bot.telegram.getFileLink(fid.file_id);
        await downloadFile(getFile.href, PathFile).catch(e => console.log(e));

        await Posts.create({
            title: title,
            body: body,
            file: file_express,
            type: type,
            username: username,
            name: name,
            telegramid: telegramid,
            time: time
        })

        ctx.reply(`${localhost}/posts/${title}`, { reply_to_message_id: message_id });
    });

    bot.on('photo', async (ctx) => {

        let number = NumberMx(25)
        let body = ctx.message.caption ? ctx.message.caption : null
        let title = number
        let fid = ctx.message.photo
        let file_express = `./files/image/${number}.jpg`
        let PathFile = `./public/files/image/${number}.jpg`
        let type = 'image'
        let name = ctx.from.first_name ? ctx.from.first_name : ctx.from.last_name ? ctx.from.last_name : ctx.chat.title ? ctx.chat.title : null;
        let username = ctx.from.username ? ctx.from.username : name;
        let telegramid = ctx.from.id;
        let [file_id] = fid.slice(-1)
        let time = moment().format('L')
        let message_id = ctx.message.message_id
        let getFile = await bot.telegram.getFileLink(file_id);
        await downloadFile(getFile.href, PathFile).catch(e => console.log(e));

        await Posts.create({
            title: title,
            body: body,
            file: file_express,
            type: type,
            username: username,
            name: name,
            telegramid: telegramid,
            time: time
        })

        ctx.reply(`${localhost}/posts/${title}`, { reply_to_message_id: message_id });

    });

    bot.on("new_chat_members", async (ctx) => {

        let members = ctx.update.message.new_chat_members[0];
        let id = members.id;
        let username = members.username? members.username : null;
        let first_name = members.first_name ? members.first_name : members.last_name ? members.last_name : null;
        let type = ctx.chat.type
        let GetUsers = await Users.findAll();

        if (GetUsers.some(e => e.dataValues.telegramid.toString().includes(id)) === false || GetUsers.length === 0) {

            await Users.create({
                type: type,
                username: username,
                name: first_name,
                telegramid: id
            })
            
            console.log(`join  ${id}`);

        }


    });

    bot.on("left_chat_member", async (ctx) => {

        let members = ctx.update.message.left_chat_member;
        let id = members.id;
        let GetUsers = await Users.findAll();

        if (GetUsers.some(e => e.dataValues.telegramid.toString().includes(id))) {

            await Users.destroy({ where: { telegramid: id }, force: true });
            console.log(`left ${id}`);
        }

    });

    bot.on("message", async (ctx) => {

        let text = ctx.message.text
        let audio = ctx.message.audio
        let message_id = ctx.message.message_id

        if (text) {

            await ctx.deleteMessage(message_id)
        }

    })

    bot.launch()

    bot.catch(async (error) => {

        console.log(error);

    });

}


function NumberMx(n) {

    let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let res = "";
    for (let i = 0; i < n; i++) {

        let id = Math.ceil(Math.random() * 35);
        res += chars[id];

    }

    return res;
}