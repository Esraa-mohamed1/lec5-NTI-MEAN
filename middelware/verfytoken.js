import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  let token =req.headers.token
  jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = decoded;
    next();
  })}