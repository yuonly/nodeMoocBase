/**
 * Created by yu on 2017/2/8.
 */
var http = require('http');
var fs = require('fs');
var request = require('request');

http.createServer(function(req,res){
    // fs.readFile('../Buffer/logo.gif',function(err,data){
    //     if(err){
    //         res.end('file not exist!');
    //     }else{
    //         res.writeHeader(200,{'Content-type':'text/html'});
    //         res.end(data);
    //     }
    // })
    //以上代码可以使用pipe一行搞定
    //fs.createReadStream('../Buffer/logo.gif').pipe(res);//说明res是一个可写流

    //边远程下载，边输出
    request('http://static.mukewang.com/static/img/common/logo.png').pipe(res);
}).listen(8090);





















