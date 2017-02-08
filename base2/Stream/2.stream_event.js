/**
 * Created by yu on 2017/2/8.
 */

var fs = require('fs');
//创建可读流
var readStream = fs.createReadStream('../Buffer/base64_img.txt');
//使用 on 监听 数据传递事件

var n = 0;

readStream
    .on('data',function(chunk){
        n++;
        //console.log(Buffer.isBuffer(chunk));
        // console.log(chunk.toString('utf8'));
        console.log('data emits');
        readStream.pause();//暂停可读流读取数据
        console.log('data pause');
        setTimeout(function(){
            console.log('data continue');
            readStream.resume();//重新开启可读流继续读
        },2000);
    }).on('readable',function(){
        console.log('data readable');
    }).on('end',function(){
        console.log(n);
        console.log('data end');
    }).on('close',function(){
        console.log('data close');
    }).on('error',function(){
        console.log('data error');
    })
