import { UserModel } from "../../database/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../email/email.js";



export const signup = async (req, res) => {
  try {
    sendEmail(req.body.email);
    const adduser = await UserModel.insertMany(req.body);
    console.log(req.body);
    res.status(201).json({
      message: "user added",
      user: adduser
    })
  } catch (error) {
    res.status(500).json({ message: "error adding user", error })
  }
}




export const signin = async (req, res) => {
  try {
    const foduser = await UserModel.findOne({ email: req.body.email }).select("+password");

    if (!foduser) {
      return res.status(404).json({ message: "user sgingup firest" });
    }

    const matchpassword = await bcrypt.compare(req.body.password, foduser.password);
    if (!matchpassword) {
      return res.status(422).json({ message: "password is wrong" });
    }

    if (foduser.isConfirmed == false) {
      return res.status(401).json({ message: "Please confirm your email first" });
    }

    const token = jwt.sign({ _id: foduser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

    foduser.password = undefined;
    return res.status(200).json({ message: "user login", data: foduser, token });

  } catch (error) {
    res.status(500).json({ message: "error login user", error })
  }
}


export const verifyAccount = async (req, res) => {
  try {
    const { token } = req.params; 

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(400).json({ message: "Invalid or expired token" });
      }
               
      const updatedUser = await UserModel.findOneAndUpdate(
        { email: decoded.email },
        { isConfirmed: true },
      
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "Email confirmed successfully", user: updatedUser });
    });
  } catch (error) {
    res.status(500).json({ message: "Error confirming email", error });
  }
};

