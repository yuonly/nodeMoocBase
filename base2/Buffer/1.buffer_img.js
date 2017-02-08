/**
 * Created by yu on 2017/2/8.
 */

var fs = require('fs');

fs.readFile('./logo.gif',function(err,buffer_orgin){
    console.log(Buffer.isBuffer(buffer_orgin));
    //写入一个新的图片
    fs.writeFile('./logo_bak.gif',buffer_orgin,function(err){
        if(err){
            console.log(err);
        }
    });
    //将图片信息转化为base64，并写入文件
    // var base64Img = (new Buffer(buffer_orgin)).toString('base64');
    var base64Img = buffer_orgin.toString('base64');
    fs.writeFile('base64_img.txt',base64Img,function(err){
        if(err){
            console.log(err);
        }
    })

    //将base64转回buffer
    var newBuffer = new Buffer(base64Img,'base64');

    fs.writeFile('new.gif',newBuffer,function(err){
        if(err){
            console.log(err);
        }
    })
})