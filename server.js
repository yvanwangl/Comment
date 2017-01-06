/**
 * Created by hanlu on 2016/11/28.
 */
//server.js

//基础配置
//加载模块
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var comments = require('./routers/comments.js');

//数据库连接
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/comment");

//使用中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//注册路由
app.use('/api/comments', comments);

//启动服务器
app.listen(port);
console.log('正在监听端口：'+port);