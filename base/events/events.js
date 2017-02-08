/**
 * Created by yu on 2017/2/7.
 */
//引入事件监听模块并获取事件发射器
var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();
life.setMaxListeners(11);

life.on('求安慰', function (who) {
    "use strict";
    console.log('给' + who + '倒水');
});
life.on('求安慰', function (who) {
    "use strict";
    console.log('给' + who + '做饭');
});
life.on('求安慰', function (who) {
    "use strict";
    console.log('给' + who + '洗衣服');
});
life.on('求安慰', function (who) {
    "use strict";
    console.log('给' + who + '揉肩');
});
life.on('求安慰', function (who) {
    "use strict";
    console.log('给' + who + '按摩');
});
life.on('求安慰', function (who) {
    "use strict";
    console.log('给' + who + '洗头');
});
life.on('求安慰', function (who) {
    "use strict";
    console.log('给' + who + '7');
});
life.on('求安慰', function (who) {
    "use strict";
    console.log('给' + who + '8');
});
life.on('求安慰', function (who) {
    "use strict";
    console.log('给' + who + '9');
});
function removeE(){
    "use strict";
    console.log('remove Listener');
}
life.on('求安慰', removeE);
//移除事件监听
life.removeListener('求安慰',removeE);

//11 也执行了，但是给了警告，官方要求，一个事件的监听不要超过10个
// 可以通过 life.setMaxListeners(数字);来修改
life.on('求安慰', function (who) {
    "use strict";
    console.log('给' + who + '11');
});

//查看某事件的监听个数及监听方法

console.log(life.listeners('求安慰'));

console.log(life.listeners('求安慰').length);

var confort = life.emit('求安慰', '汉子');//返回该事件是否有被监听过，监听过返回true
var love = life.emit('求溺爱','妹子');
console.log(confort,love);