import bcrypt from "bcrypt";



export const Hashpassword = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8); 

    req.body.password = hashedPassword;
  } catch (error) {
    return res.status(500).json({ message: "error hashing password", error });
  }
next()
 }




 // hash hashing asynchronously
 //hashsync   << hashing synchronously