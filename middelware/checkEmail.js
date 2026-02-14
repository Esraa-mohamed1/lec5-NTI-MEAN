import { UserModel } from "../database/models/user.model.js"
export const ChechEmail = async (req, res, next) => {

  let fonduser = await UserModel.findOne({ email: req.body.email })

  if (req.url == "/signup") {
    if (fonduser) {
      return res.status(409).json({ message: "email already exist" })
    }
    else {
      next()
    }


  } else {
    if (fonduser) {
      next();
    } else {
      return res.status(422).json({ message: "email not found" })
    }
  }
}

