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
- nodejs ``` sudo apt install nodejs ```
- git ``` sudo apt install git ```
- pm2 ``` sudo npm install -g pm2 ```
- [شهادة ssl ](https://greenlock.domains)
- [ إنشاء بوت تيليجرام ](https://t.me/BotFather)
- تحرير ملف Settings.json 


<br><br>

```json

{
    "Token":"5235135307:AAHo0oLEmzsCDtLdTheDvq--QovO-i_dk7s",
    "localhost":"http://localhost",
    "admin": 1061237219
}

```

Token | توكن بوت التيلجرام <br>
localhost | رابط الموقع <br>
admin | معرف مدير القروب <br> 

<br><br>

```bash

git clone https://github.com/rn0x/Altaqwaa_Express
cd Altaqwaa_Express
npm i
sudo pm2 startup
sudo pm2 start index.js --name Altaqwaa
sudo pm2 save

```
<br><br>

لإعادة تشغيل الموقع والبوت 

<br><br>

```bash

sudo pm2 restart Altaqwaa

```

<br><br><br><br>


<p align="center">
  <img align="center" src="/github/1.png"> <br><br>
  <img align="center" src="/github/2.png"> <br><br>
  <img align="center" src="/github/3.jpg"> <br><br><br><br>
</p>