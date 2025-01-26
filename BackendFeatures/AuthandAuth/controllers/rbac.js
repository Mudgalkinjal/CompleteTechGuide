const roles = {
    admin: ['read', 'write', 'delete'],
    user: ['read'],
  };
  
  exports.authorize = (role, action) => {
    return (req, res, next) => {
      const userRole = req.user.role;
      if (!roles[userRole]?.includes(action)) {
        return res.status(403).json({ message: 'Permission denied!' });
      }
      next();
    };
  };
  