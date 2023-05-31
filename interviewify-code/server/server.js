const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

//setup express
var app = express()
var PORT = process.env.PORT || 4000
app.use(express.json())

//setup routes
const userRoute = require('./routes/user')

//setup mongoose connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch(err => ('❌ Error connecting to MongoDB: ' + err))


//middleware
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

//use routers and listen 
app.use('/user', userRoute)
app.listen(PORT, () => {
  console.log(`✅ Server listening on POST ${PORT}`);
})