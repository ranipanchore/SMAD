const allowRoles = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).send('NO Admin Access denied');
      }
      next();
    };
  };
  
  module.exports = allowRoles;
