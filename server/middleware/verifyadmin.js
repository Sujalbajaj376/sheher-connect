// For demo: Hardcoded admin check
module.exports = (req, res, next) => {
    const adminToken = req.headers['authorization'];
  
    if (adminToken === "Bearer myAdminSecret") {
      next();
    } else {
      return res.status(403).json({ message: "Forbidden: Admins only" });
    }
  };
  