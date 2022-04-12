const fs = require('fs-extra');
const moment = require('moment');

let Settings = fs.readJSONSync('./Settings.json');
let localhost = Settings.localhost;
let sitem = [

   { url: localhost , image: localhost + "/logo.png" },
   { url: localhost + "/app", image: localhost + "/files/app/1.png" },
   { url: localhost + "/video", image: localhost + "/logo.png" },
   { url: localhost + "/image", image: localhost + "/logo.png" },
   { url: localhost + "/quran", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الفاتحة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/البقرة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/آل_عمران", image: localhost + "/logo.png" },
   { url: localhost + "/quran/النساء", image: localhost + "/logo.png" },
   { url: localhost + "/quran/المائدة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الأنعام", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الأعراف", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الأنفال", image: localhost + "/logo.png" },
   { url: localhost + "/quran/التوبة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/يونس", image: localhost + "/logo.png" },
   { url: localhost + "/quran/هود", image: localhost + "/logo.png" },
   { url: localhost + "/quran/يوسف", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الرعد", image: localhost + "/logo.png" },
   { url: localhost + "/quran/إبراهيم", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الحجر", image: localhost + "/logo.png" },
   { url: localhost + "/quran/النحل", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الإسراء", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الكهف", image: localhost + "/logo.png" },
   { url: localhost + "/quran/مريم", image: localhost + "/logo.png" },
   { url: localhost + "/quran/طه", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الأنبياء", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الحج", image: localhost + "/logo.png" },
   { url: localhost + "/quran/المؤمنون", image: localhost + "/logo.png" },
   { url: localhost + "/quran/النور", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الفرقان", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الشعراء", image: localhost + "/logo.png" },
   { url: localhost + "/quran/النمل", image: localhost + "/logo.png" },
   { url: localhost + "/quran/القصص", image: localhost + "/logo.png" },
   { url: localhost + "/quran/العنكبوت", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الروم", image: localhost + "/logo.png" },
   { url: localhost + "/quran/لقمان", image: localhost + "/logo.png" },
   { url: localhost + "/quran/السجدة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الأحزاب", image: localhost + "/logo.png" },
   { url: localhost + "/quran/سبأ", image: localhost + "/logo.png" },
   { url: localhost + "/quran/فاطر", image: localhost + "/logo.png" },
   { url: localhost + "/quran/يس", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الصافات", image: localhost + "/logo.png" },
   { url: localhost + "/quran/ص", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الزمر", image: localhost + "/logo.png" },
   { url: localhost + "/quran/غافر", image: localhost + "/logo.png" },
   { url: localhost + "/quran/فصلت", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الشورى", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الزخرف", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الدخان", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الجاثية", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الأحقاف", image: localhost + "/logo.png" },
   { url: localhost + "/quran/محمد", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الفتح", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الحجرات", image: localhost + "/logo.png" },
   { url: localhost + "/quran/ق", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الذاريات", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الطور", image: localhost + "/logo.png" },
   { url: localhost + "/quran/النجم", image: localhost + "/logo.png" },
   { url: localhost + "/quran/القمر", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الرحمن", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الواقعة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الحديد", image: localhost + "/logo.png" },
   { url: localhost + "/quran/المجادلة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الحشر", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الممتحنة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الصف", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الجمعة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/المنافقون", image: localhost + "/logo.png" },
   { url: localhost + "/quran/التغابن", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الطلاق", image: localhost + "/logo.png" },
   { url: localhost + "/quran/التحريم", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الملك", image: localhost + "/logo.png" },
   { url: localhost + "/quran/القلم", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الحاقة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/المعارج", image: localhost + "/logo.png" },
   { url: localhost + "/quran/نوح", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الجن", image: localhost + "/logo.png" },
   { url: localhost + "/quran/المزمل", image: localhost + "/logo.png" },
   { url: localhost + "/quran/المدثر", image: localhost + "/logo.png" },
   { url: localhost + "/quran/القيامة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الإنسان", image: localhost + "/logo.png" },
   { url: localhost + "/quran/المرسلات", image: localhost + "/logo.png" },
   { url: localhost + "/quran/النبأ", image: localhost + "/logo.png" },
   { url: localhost + "/quran/النازعات", image: localhost + "/logo.png" },
   { url: localhost + "/quran/عبس", image: localhost + "/logo.png" },
   { url: localhost + "/quran/التكوير", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الانفطار", image: localhost + "/logo.png" },
   { url: localhost + "/quran/المطففين", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الانشقاق", image: localhost + "/logo.png" },
   { url: localhost + "/quran/البروج", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الطارق", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الأعلى", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الغاشية", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الفجر", image: localhost + "/logo.png" },
   { url: localhost + "/quran/البلد", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الشمس", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الليل", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الضحى", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الشرح", image: localhost + "/logo.png" },
   { url: localhost + "/quran/التين", image: localhost + "/logo.png" },
   { url: localhost + "/quran/العلق", image: localhost + "/logo.png" },
   { url: localhost + "/quran/القدر", image: localhost + "/logo.png" },
   { url: localhost + "/quran/البينة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الزلزلة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/العاديات", image: localhost + "/logo.png" },
   { url: localhost + "/quran/القارعة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/التكاثر", image: localhost + "/logo.png" },
   { url: localhost + "/quran/العصر", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الهمزة", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الفيل", image: localhost + "/logo.png" },
   { url: localhost + "/quran/قريش", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الماعون", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الكوثر", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الكافرون", image: localhost + "/logo.png" },
   { url: localhost + "/quran/النصر", image: localhost + "/logo.png" },
   { url: localhost + "/quran/المسد", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الإخلاص", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الفلق", image: localhost + "/logo.png" },
   { url: localhost + "/quran/الناس", image: localhost + "/logo.png" }

]


if (fs.existsSync('./sitemap.json') === false) {

   fs.writeJSONSync('./sitemap.json', [])

}

else if (fs.existsSync('./sitemap.json')) {

   for (const item of sitem) {

      sitemap_json(item.url, item.image, undefined);

   }

}


 async function sitemap_json(url, img, type) {

   if (fs.existsSync('./sitemap.json') === false) {

      fs.writeJSONSync('./sitemap.json', [])
   
   }

   let json = fs.readJsonSync('./sitemap.json');

   if (json.some(e => e.url.includes(url)) === false) {

      let opj = { url: url, image: img, type: type }

      json.push(opj)
      fs.writeJSONSync('./sitemap.json', json);
      console.log(url);
      await sitemap_xml();
   }
}


async function sitemap_xml() {

   if (fs.existsSync('./sitemap.json') === false) {

      fs.writeJSONSync('./sitemap.json', [])
   
   }

   let json = fs.readJsonSync('./sitemap.json');
   let xml = `<?xml version="1.0" encoding="UTF-8"?>
   <!--	created with www.mysitemapgenerator.com	-->
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`

   for (const item of json) {

      if (item.type === undefined) {

         xml += '<url>\n'
         xml += `	<loc>${item.url}</loc>\n`
         xml += `	<lastmod>${moment().format()}</lastmod>\n`
         xml += '	<priority>0.8</priority>\n'
         xml += '	<image:image>\n'
         xml += `			<image:loc>${item.image}</image:loc>\n`
         xml += '	</image:image>\n'
         xml += '</url>\n'

      }

      else if (item.type === 'video') {

         xml += '<url>\n'
         xml += `	<loc>${item.url}</loc>\n`
         xml += `	<lastmod>${moment().format()}</lastmod>\n`
         xml += '	<priority>0.8</priority>\n'
         xml += '</url>\n'

      }

      else if (item.type === 'image') {

         xml += '<url>\n'
         xml += `	<loc>${item.url}</loc>\n`
         xml += `	<lastmod>${moment().format()}</lastmod>\n`
         xml += '	<priority>0.8</priority>\n'
         xml += '	<image:image>\n'
         xml += `			<image:loc>${item.image}</image:loc>\n`
         xml += '	</image:image>\n'
         xml += '</url>\n'

      }
   }

   xml += '</urlset>\n'

   fs.writeFileSync('./public/sitemap.xml', xml);


}

module.exports = {
   sitemap_json: sitemap_json
}

