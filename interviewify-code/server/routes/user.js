const mongoose = require('mongoose');
const express = require('express');
const User = require('../Models/userModel')
const bcrypt = require('bcrypt');

const userRouter = express.Router()

userRouter.post('/signup', async (req, res) => {
  //hash pass
  const hashedPass = await bcrypt.hash(req.body.password, 10)

  //create new user
  const newUser = new User({
    name: req.body.name,
    password: hashedPass,
    email: req.body.email,
  })

  //save user then send user object back to client
  await newUser.save()
    .then(() => {
      res.status(200).json({ ...newUser._doc, password: undefined }) //take out pass
    })
    .catch(err => res.status(400).send({ error: `❌ Signup user error: ${err}` }))
})

userRouter.post('/login', async (req, res) => {
  //check all fields exist
  const { email, password } = req.body
  if (!email) return res.status(400).json({ error: 'No email' })
  if (!password) return res.status(400).json({ error: 'No password' })

  //get targetUser
  const targetUser = await User.findOne({ email: email })
  if (!targetUser) return res.status(400).json({ error: 'No user with this email exists' })

  //check password and return user if match
  bcrypt.compare(password, targetUser.password, function (err, result) {
    if (err) res.status(400).send({ error: `❌ Login user error: ${err}` })

    if (!result) return res.status(400).json({ error: 'Password does not match' })
    else return res.status(200).json({ ...targetUser._doc, password: undefined })
  });
})

userRouter.post('/get', async (req, res) => {
  let targetUser = await User.findOne(req.body)

  if (!targetUser) return res.status(400).json({ error: 'User does not exist' })
  else return res.status(200).json({ ...targetUser._doc, password: undefined })
})

module.exports = userRouter