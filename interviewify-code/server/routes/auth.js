const express = require('express');
const passport = require('passport');

const clientURL = "http://localhost:3000"
const router = express.Router();

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({ user: req.user })
  } else {
    res.status(401).json({ message: "Not authorized" })
  }
})

router.get("/login/failed", (req, res) => {
  res.status(401).json({ message: "Login failed" });
})

router.get(
  "/google",
  passport.authenticate("google", ["profile", "email"])
)

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: clientURL,
    failureRedirect: "login/failed"
  })

);

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Logout Error' });
    }
    return res.status(200).json({ message: 'Logout Successful' });
  });
});

module.exports = router