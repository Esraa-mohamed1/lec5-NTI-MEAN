import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  let token = req.headers.token;
  if (!token) return res.status(401).json({ message: "Token not provided" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
    req.user = decoded;
    next();
  });
};

export const allowedTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "You are not authorized to access this route" });
    }
    next();
  };
};