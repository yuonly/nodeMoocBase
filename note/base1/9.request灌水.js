/**
 * Created by yu on 2017/2/8.
 */
var http = require('http');

var querystring = require('querystring');

//提交的数据，查看form-data决定对象中的内容
var postData = querystring.stringify({
    content:'666，太厉害了',
    mid:8837
});

var options = {
    hostname:"www.imooc.com",
    prot:80,
    path:'/course/docomment',
    method:'POST',
    headers:{
        "Accept":"application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding":"gzip, deflate",
        "Accept-Language":"zh-CN,zh;q=0.8",
        "Connection":"keep-alive",
        "Content-Length":postData.length,
        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie":"imooc_uuid=0e18a8c6-28af-47e0-b9a7-4615df50d91c; imooc_isnew_ct=1482663434; loginstate=1; apsid=hhMWJjOTU5YTNjYzY4MzY4MzdhOGEzNmVlZTE0NTkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzYwNTk5NgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB6aG91eXV4aWFuZzA3MDhAMTYzLmNvbQAAAAAAAAAAAGMwNDZhOTk1MGU4OWMzZWRjYTliZTIwNGQ1YjJkMGNmAbGGWAGxhlg%3DMj; last_login_username=zhouyuxiang0708%40163.com; PHPSESSID=tmqn4b0l6ock5ujfkr8useb8f0; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1486440242; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1486514783; imooc_isnew=2; cvde=58994730b1b61-320",
        "Host":"www.imooc.com",
        "Origin":"http://www.imooc.com",
        "Referer":"http://www.imooc.com/video/8837",
        "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36",
        "X-Requested-With":"XMLHttpRequest"
    }
};

var req = http.request(options,function(res){
    "use strict";
    console.log('Status: ' + res.statusCode);
    console.log('Headers: ' + JSON.stringify(res.headers));
    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
    })
    res.on('end',function(){
        console.log('评论完毕');
    })
})

req.on('error',function(e){
    "use strict";
    console.log('Error: ' + e.message);
})

req.write(postData);
req.end();