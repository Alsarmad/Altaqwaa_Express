const http = require('http');
const https = require('https');
const fs = require('fs');

module.exports = async function server(app) {

    try {

        const port_https = 443;
        const port_http = 80;
        const key = fs.readFileSync('./ssl/server.key', 'utf8');
        const cert = fs.readFileSync('./ssl/server.crt', 'utf8');

        https.createServer({ key, cert }, app) .listen(port_https);
        http.createServer(app).listen(port_http);
        
    } catch (error) {

        console.log(error);
        
    }
    
}