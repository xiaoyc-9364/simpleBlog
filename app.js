//启动入口
var express = require('express');

var swig = require('swig');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');    //加载body-parser,处理post提交过来的数据

var app = express();    //服务端对象
app.use(bodyParser.urlencoded({extended: true}));
//静态文件
app.use('/public', express.static(__dirname + '/public'));

//模块
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/main'));

app.engine('html', swig.renderFile); //定义模板引擎

app.set('views', './views');        //第一个参数必须是views；

app.set('view engine', 'html');     //注册模板引擎
//开发中取消缓存
swig.setDefaults({cache:false});

// app.use(bodyParser.json());


//连接数据库
mongoose.connect('mongodb://localhost:27018/blog', {useMongoClient: true}, function(err) {
    if (err) {
        console.log('数据库连接失败!');
    } else {
        console.log('数据库连接成!');
    }
    
})


//监听
app.listen(8081);