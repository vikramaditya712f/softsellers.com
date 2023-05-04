const express = require('express');
const morgan = require('morgan');
// const path = require('path');
// const hbs = require('hbs');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoutes');
const sellerRouter = require('./routes/sellerRoutes');
const errorMiddleware = require('./middleware/error');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

//1) Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/public/upload/image`));
app.use(express.static(`${__dirname}/public/img`));

app.use((req, res, next) => {
  // console.log('Hello form the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello from the server', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...');
// });

//to set the view engine
// const templatePath = path.join(__dirname, '/templates/views');
// const partialsPath = path.join(__dirname, './templates/partials');

app.set('view engine', 'ejs');
// app.set('views', templatePath);
// hbs.registerPartials(partialsPath);

app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/cart', orderRouter);
app.use('/api/v1/seller', sellerRouter);
app.use('/api/v1/order', orderRouter);

app.use(errorMiddleware);
module.exports = app;
