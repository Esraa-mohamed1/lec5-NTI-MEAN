import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255
  },
  isConfirmed: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    select: false,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  role: {
    type: String,
    required: true,
    enum: ["teacher", "student"],
    default: "student"
  },
  age: {
    type: Number,
    required: true,
    min: 18, max: 100,
  }
})

export const UserModel = mongoose.model("User", userSchema)