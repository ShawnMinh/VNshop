var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Goods = require('../models/goods');

// 连接数据库
// mongoose.connect('mongodb://47.93.231.75:27017/shop');
mongoose.connect('mongodb://localhost:27017/shop');

mongoose.connection.on('connected', function() {
    console.log('sucess!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
})

// 当连接发生错误的时候
mongoose.connection.on('error', function() {
    console.log('Mongodb connected fail');
})

// 当关闭连接数据库的时候
mongoose.connection.on('disconnected', function() {
    console.log('sucess!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
})

router.get('/', function(req, res, next) {
    Goods.find({    }, function(err, doc) {
        if (err) {
            res.json({ status: "1", msg: err.message })
        } else {
            res.json({ status: '0', msg: '', result: doc })
        }
    })
})

router.get('/sortXXXX', function(req, res, next) {
    let sort = req.param('sort');
    let max = req.param('max');
    let min = req.param('min');
    Goods.find({salePrice: {$gte: min, $lte: max}}, function(err, doc) {
        if (err) {
            res.json({ status: "1", msg: err.message })
        } else {
            res.json({ status: '0', msg: '', result: doc })
        }
    }).sort({ 'salePrice': sort });

})
module.exports = router;