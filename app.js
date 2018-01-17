//启动入口
var express = require('express');

var swig = require('swig');

var app = express();    //服务端对象

//静态文件
app.use('/public', express.static(__dirname + '/public'));

app.engine('html', swig.renderFile); //定义模板引擎

app.set('views', './views');//第一个参数必须是views；

app.set('view engine', 'html');//注册模板引擎
//开发中取消缓存
swig.setDefaults({cache:false});

app.get('/', function(req, res, next) {
    // res.send('<h1>欢迎光临我的博客首页！</h1>');
    //读取模板文件,找到views下的index；
    res.render('index')
});

app.get('/', function(req, res, next) {
    res.writeHead('content-type', 'text/css');
    res.send('body{background:red;}');
})


//监听
app.listen(8081);