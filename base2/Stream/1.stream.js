/**
 * Created by yu on 2017/2/8.
 */
var fs = require('fs');
var source = fs.readFileSync('../buffer/logo.gif');
fs.writeFileSync('stream_copy.gif',source);