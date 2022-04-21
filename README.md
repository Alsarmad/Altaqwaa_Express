# Altaqwaa_Express

<br>

<p align="center">
    موقع التقوى + بوت تيليجرام لرفع الفيديوهات والصور على الموقع
</p>

<br><br>


### محتويات الموقع 

- الرئيسية 
- الفيديوهات
- الصور
- القرآن الكريم
- تطبيق التقوى


<br><br>

##### متطلبات تشغيل الموقع
- nodejs ```bash sudo apt install nodejs ```
- git ```bash sudo apt install git ```
- pm2 ```bash sudo npm install -g pm2 ```
- [شهادة ssl ](https://greenlock.domains)
- تحرير ملف Settings.json وإضافة توكن بوت التيليجرام + رابط الموقع

```json

{
    "Token":"5235135307:AAHo0oLEmzsCDtLdTheDvq--QovO-i_dk7s",
    "localhost":"http://localhost"
}

```

```bash

git clone https://github.com/rn0x/Altaqwaa_Express
cd Altaqwaa_Express
npm i
sudo pm2 start index.js --name Altaqwaa
sudo pm2 save

```

لإعادة تشغيل الموقع والبوت 

```bash

sudo pm2 restart Altaqwaa

```


<p align="center">
  <img align="center" src="/Github/1.png"> <br><br>
  <img align="center" src="/Github/2.png"> <br><br>
  <img align="center" src="/Github/3.png"> <br><br><br><br>
</p>