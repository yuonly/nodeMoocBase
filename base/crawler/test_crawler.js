/**
 * Created by yu on 2017/2/8.
 */
var cheerio = require('cheerio');

var $ = cheerio.load('<ul>\
    <li><i>oo</i>111</li>\
    <li><i>oo</i>222</li>\
    <li><i>oo</i>333</li>\
    <li><i>oo</i>444</li>\
    <li><i>oo</i>555</li>\
    </ul>');
var lis = $('li');

lis.each(function(index){
    var $li = $(this);//拿到每一个li的对象

    console.log($li.contents().filter(function(){
        "use strict";
        return this.nodeType==3;
    }).text());//通过text()方法，拿到当前li中的内容
})

