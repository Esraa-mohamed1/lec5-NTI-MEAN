export const gerror =(err, req, res, next) => {
  console.error("Global Error Handler:", err);

  res.status(err.statusCode || 500).json({ message: err.message || "Internal Server Error" }  );
  
}