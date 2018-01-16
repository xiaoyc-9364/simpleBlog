//启动入口
var express = require('express');
var app = express();    //服务端对象

app.get('/', function(req, res, next) {
    res.send('<h1>欢迎光临我的博客首页！</h1>');
})

//监听
app.listen(8081);