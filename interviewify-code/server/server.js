const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
// const session = require("express-session");
const passport = require("passport");
require('./passport')

//setup routes
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const gptRoute = require('./routes/gpt')

//config environment variables
require('dotenv').config()

//setup express
var app = express()
var PORT = process.env.PORT || 4000
const origin = "http://localhost:3000"

//
//  MIDDLEWARE
//
app.use(require('express-session')({ secret: 'goatalert@#%@#', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: origin, credentials: true }));
app.use(morgan("dev"));
app.use(helmet());

//logger
const logger = (req, res, next) => {
  const currentDate = new Date()
  const logTime = `${currentDate
    .getHours()
    .toString()
    .padStart(2, '0')}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${currentDate
        .getSeconds()
        .toString()
        .padStart(2, '0')}`

  console.log(`👉[${logTime}] ${req.method} ${req.url}`)
  next()
}
app.use(logger)

//
// DB Connection 
//
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch(err => ('❌ Error connecting to MongoDB: ' + err))



//use routes and listen 
app.use('/user', userRoute)
app.use('/auth', authRoute)
app.use('/gpt', gptRoute)

app.listen(PORT, () => {
  console.log(`✅ Server listening on POST ${PORT}`);
})