const express = require('express');
const { register, login, verifyToken } = require('../controllers/jwtAuth');
const passport = require('passport');

const router = express.Router();

// JWT Authentication
router.post('/register', register);
router.post('/login', login);
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: `Hello, ${req.user.username}! You are authenticated.` });
  });

// Google OAuth
router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/dashboard');
});

module.exports = router;
