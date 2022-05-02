var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
const productRouter = require("./routes/products");
const postRouter = require("./routes/posts");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

//設定資料庫資料
const DB = process.env.MONGODB.replace('<password>', process.env.PW);
//連線資料庫
mongoose.connect(DB)
    .then(() => {
        console.log("資料庫連線成功")
    })
    .catch((error) => {
        console.log(error);
    })

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use("/products", productRouter);
app.use("/posts",postRouter);

module.exports = app;
