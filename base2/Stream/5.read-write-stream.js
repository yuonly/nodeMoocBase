/**
 * Created by yu on 2017/2/8.
 */

var Readable = require('stream').Readable;
var Writable = require('stream').Writable;

var readStream = new Readable();
var writStream = new Writable();

readStream.push('I');
readStream.push('Love');
readStream.push('IMOOC\n');
readStream.push(null);//读完了

writStream._write(function(chunk,encode,cb=function(){}){
    console.log(chunk.toString());
})

readStream.pipe(writStream);
