/**
 * Created by yu on 2017/2/7.
 */
var http = require('http');
var Promise = require('bluebird');//引入promise模块

var cheerio = require('cheerio');//用来解析html代码的模块

var baseUrl = 'http://www.imooc.com/learn/';

var coursesData = [];//课程数据

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

    var courseData = {
        title :$('.hd').find('h2').text().trim(),//课程标题
        chapters : [],
    };
    chapters.each(function(index){

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
        courseData.chapters.push(chapterData);
    })
    return courseData;
}

function printCourseData(coursesData){
    coursesData.forEach(function(courseData){
        console.log('课程名： '+courseData.title + '\n');
        courseData.chapters.forEach(function(item){
            console.log(item.title+'\n');
            item.videos.forEach(function(video){
                console.log('  id: '+video.id+'   title: '+video.title);
            })
        })
    })

}

function getPageAsync(url){
    return new Promise(function(resolve,reject){
        console.log('正在爬取');
        http.get(url,function(res){
            var html = '';
            res.on('data',function(data){
                html += data;
            })
            res.on('end',function(){
                resolve(html);//将爬取的页面传递到then中
            })
        }).on('error',function(e){
            reject(e);//出错了，把错误传递
            console.log('获取课程数据出错');
        })
    })
}

var fetchCourseArray = [];
videoIds = [637,348,259,197,134];
videoIds.forEach(function(id){
    var url = baseUrl + id;
    fetchCourseArray.push(getPageAsync(url));
})

//发起多个异步promise.all([promise的数组])

Promise.all(fetchCourseArray)
    .then(function(pages){
        pages.forEach(function(html){
            coursesData.push(filterChapter(html));
            printCourseData(coursesData);
        })
    });