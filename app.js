const express = require('express');
const path = require('path');
require('dotenv').config()

var indexRouter = require('./routes/index-routes');
var catalogRouter = require('./routes/catalog-routes');
var cartRouter = require('./routes/cart-routes');
var goodsRouter = require('./routes/goods-routes');

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', indexRouter);
app.use('/catalog', catalogRouter);
app.use('/cart', cartRouter);
app.use('/goods', goodsRouter);

module.exports = app;
