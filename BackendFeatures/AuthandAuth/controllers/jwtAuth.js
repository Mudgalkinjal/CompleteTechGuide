const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = []; // Replace with DB in production

// Register User
exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully!' });
};

// Login User
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
  res.status(200).json({ token });
};

// Middleware to Protect Routes
exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'Token required!' });

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token!' });
    req.user = decoded;
    next();
  });
};
