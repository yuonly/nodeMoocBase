/**
 * Created by yu on 2017/2/7.
 */
var http = require('http');
var cheerio = require('cheerio');//用来解析html代码的模块
var url = 'http://www.imooc.com/learn/348';

function filterChapter(html){
    var $ = cheerio.load(html);//通过cheerio的load的方法，将页面的解析对象存入$
    var chapters = $('.chapter');//拿到了页面中所有课程章节组合出来的一个对象

    //目标数据结构
    // [{
    //     chapterTitle: ,
    //     videos:[
    //         {
    //             title:'',
    //             id:''
    //         }
    //     ]
    // }]

    var courseData = [];//课程数据

    chapters.each(function(index){
        "use strict";
        var chapter = $(this);//拿到当前章节对应的div对象
        var title = chapter.find('h3 strong i').text().trim();//获得章节标题
        var videosBox = chapter.find('.video li');
        var chapterData = {};//每章数据对象
        chapterData.title = title;//章节标题
        chapterData.videos = [];//每章小节视频数据

        videosBox.each(function(){
            var videData = {};
            var video = $(this);
            var id = video.attr('data-media-id');
            var title = video.find('a').contents().filter(function(){
                return this.nodeType==3;
            }).text().trim();//只获取文本节点

            videData = {
                title:title,
                id:id
            }
            chapterData.videos.push(videData);
        })
        courseData.push(chapterData);
    })

    printCourseData(courseData);
}

function printCourseData(courseData){
    courseData.forEach(function(item){
        console.log(item.title+'\n');
        item.videos.forEach(function(video){
            console.log('  id: '+video.id+'   title: '+video.title);
        })
    })
}

http.get(url,function(res){
    var html = '';
    res.on('data',function(data){
        html += data;
    })
    res.on('end',function(){
        filterChapter(html);
    })
}).on('error',function(){
    "use strict";
    console.log('获取课程数据出错');
})