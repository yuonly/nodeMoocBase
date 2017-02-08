/**
 * Created by yu on 2017/2/8.
 */

var fs = require('fs');

var readStream = fs.createReadStream('1.mp4');

var writeStream = fs.createWriteStream('1-stream.mp4');

readStream.on('data',function(chunk){
    if(writeStream.write(chunk)===false){//说明还没写完
        console.log('still write');
        readStream.pause();

    }
})

readStream.on('end',function(){
    writeStream.end();
})

writeStream.on('drain',function(){//已经写完了
    console.log('data drain');
    readStream.resume();
})