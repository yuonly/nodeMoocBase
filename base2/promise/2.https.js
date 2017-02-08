/**
 * Created by yu on 2017/2/8.
 */
const https = require('https');

const fs = require('fs');

const options = {
    key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
    cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

//创建https服务器
https.createServer(options,function(req,res){
    res.writeHead(200);
    res.end('Hello Https');

}).listen(8090);