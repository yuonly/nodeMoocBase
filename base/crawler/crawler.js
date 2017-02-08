/**
 * Created by yu on 2017/2/7.
 */
var http = require('http');

var url = 'http://www.imooc.com/learn/348';

http.get(url,function(res){
    var html = '';
    res.on('data',function(data){
        html += data;
    })
    res.on('end',function(){
        "use strict";
        console.log(html);
    })
}).on('error',function(){
    "use strict";
    console.log('获取课程数据出错');
})