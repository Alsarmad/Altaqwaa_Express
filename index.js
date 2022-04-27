const express = require('express');
const server = require('./server.js');
const fs = require('fs-extra');
const pug = require('pug');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sqlite3 = require('sqlite3');
const jsStringify = require('js-stringify');
const Telegram = require('./Telegram/index.js');


async function Express() {

    try {

        fs.mkdirSync('./public/files/video', { recursive: true });
        fs.mkdirSync('./public/files/image', { recursive: true });
        let Settings = fs.readJSONSync('./Settings.json');
        let localhost = Settings.localhost
        await Telegram();
        let app = express();
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
        app.disable('x-powered-by');

        app.use(express.static(__dirname + '/public'));

        app.get('/', async (request, response) => {

            let GetPosts = await Posts.findAll();
            let GetUsers = await Users.findAll();
            let [lastUsers] = GetUsers.slice(-1)
            let Options = {

                GetPosts: GetPosts,
                Users_length: GetUsers.length,
                jsStringify: jsStringify,
                localhost: localhost,
                lastUsers: lastUsers.username ? lastUsers.username : lastUsers.name
            }
            let render = pug.renderFile('./views/home.pug', Options);
            response.send(render)
        });

        app.get('/app', async (request, response) => {
            let render = pug.renderFile('./views/app.pug', { localhost: localhost });
            response.send(render)
        });

        app.get('/Quran', async (request, response) => {

            let GetUsers = await Users.findAll();
            let [lastUsers] = GetUsers.slice(-1)
            let Options = {

                Member: await Posts.findAll(),
                Users_length: GetUsers.length,
                localhost: localhost,
                lastUsers: lastUsers.username ? lastUsers.username : lastUsers.name
            }
            let render = pug.renderFile('./views/Quran_Home.pug', Options);
            response.send(render)
        });

        app.get('/video', async (request, response) => {

            let GetPosts = await Posts.findAll();
            let GetUsers = await Users.findAll();
            let [lastUsers] = GetUsers.slice(-1)
            let Options = {

                GetPosts: GetPosts,
                Users_length: GetUsers.length,
                jsStringify: jsStringify,
                localhost: localhost,
                lastUsers: lastUsers.username ? lastUsers.username : lastUsers.name
            }
            //console.log(GetPosts[1].dataValues.file);
            let render = pug.renderFile('./views/video.pug', Options);
            response.send(render)
        });

        app.get('/image', async (request, response) => {

            let GetPosts = await Posts.findAll();
            let findPosts = GetPosts.find(e => e.dataValues.title)
            let GetUsers = await Users.findAll();
            let [lastUsers] = GetUsers.slice(-1)
            let Options = {
                GetPosts: GetPosts,
                Users_length: GetUsers.length,
                jsStringify: jsStringify,
                localhost: localhost,
                lastUsers: lastUsers.username ? lastUsers.username : lastUsers.name
            }
            let render = pug.renderFile('./views/image.pug', Options);
            response.send(render)
        });

        app.get('/quran/:id', async (request, response) => {

            let PostsId = request.params.id;
            let GetPosts = fs.readJsonSync('./public/files/Quran.json')
            let findPosts = GetPosts.find(e => e.Name.replace(/\s+/g, '_') === PostsId)
            let GetUsers = await Users.findAll();
            let [lastUsers] = GetUsers.slice(-1)
            //console.log(findPosts ? findPosts.dataValues : undefined);
            // .title.replace(/\s+/g, '_').slice(0,50)
            console.log(findPosts);
            if (findPosts === undefined) {

                let render = pug.renderFile('./views/404.pug', { localhost: localhost });
                response.status(404).send(render);

            } else {

                let Options = {

                    Name: findPosts.Name,
                    English_Name: findPosts.English_Name,
                    Number: findPosts.Number,
                    Number_Verses: findPosts.Number_Verses,
                    Number_Words: findPosts.Number_Words,
                    Number_Letters: findPosts.Number_Letters,
                    Descent: findPosts.Descent,
                    Surah: findPosts.Surah,
                    Member: await Posts.findAll(),
                    Users_length: GetUsers.length,
                    localhost: localhost,
                    lastUsers: lastUsers.username ? lastUsers.username : lastUsers.name
                }
                let render = pug.renderFile('./views/Quran_Surah.pug', Options);
                response.send(render)
            }

        });


        app.get('/posts/:id', async (request, response) => {

            let PostsId = request.params.id;
            let GetPosts = await Posts.findAll();
            let GetUsers = await Users.findAll();
            let [lastUsers] = GetUsers.slice(-1)
            let findPosts = GetPosts.find(e => e.dataValues.title === PostsId)
            //console.log(findPosts ? findPosts.dataValues : undefined);
            // .title.replace(/\s+/g, '_').slice(0,50)
            if (findPosts === undefined) {

                let render = pug.renderFile('./views/404.pug', { localhost: localhost });
                response.status(404).send(render);

            } else {

                let Options = {

                    title: findPosts.dataValues.title,
                    body: findPosts.dataValues.body,
                    file: findPosts.dataValues.file,
                    type: findPosts.dataValues.type,
                    username: findPosts.dataValues.username,
                    name: findPosts.dataValues.name,
                    telegramid: findPosts.dataValues.telegramid,
                    time: findPosts.dataValues.time,
                    localhost: localhost,
                    GetPosts: GetPosts,
                    Users_length: GetUsers.length,
                    lastUsers: lastUsers.username ? lastUsers.username : lastUsers.name
                }
                let render = pug.renderFile('./views/posts.pug', Options);
                //response.send(getPosts.path);
                response.send(render)
            }

        });

        app.get('*', (request, response) => {
            let render = pug.renderFile('./views/404.pug', { localhost: localhost });
            response.status(404).send(render);
        });


        server(app)

    } catch (error) {

        console.log(error);

    }

}

Express()