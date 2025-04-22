const jwt = require("jsonwebtoken");

// Basic token verification middleware
const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "No authentication token, access denied" });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
    req.user = verified; // contains id, email, role (if added in token)
    next();
  } catch (err) {
    res.status(401).json({ message: "Token verification failed, authorization denied" });
  }
};

// Admin-only middleware (use after `auth`)
const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};

module.exports = {
  auth,
  isAdmin,
};
