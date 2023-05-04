const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    // useFindAndModifyL: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful');
  });

// mongoose
// .connect(process.env.DATABASE_LOCAL, {
//   // .connect(DB, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModifyL: false,
// })
// .then(() => {
//   console.log('DB connection successful');
// });

const port = 4000 || process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
