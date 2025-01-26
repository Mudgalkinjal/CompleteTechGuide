const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/auth');

// Initialize Express app
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Session configuration
app.use(
  session({
    secret: 'sessionSecret',
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport for OAuth2
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', authRoutes);

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));
