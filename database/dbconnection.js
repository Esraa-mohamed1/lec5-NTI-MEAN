import mongoose from "mongoose";

export const dbconnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Nti");
    console.log("Connected to database");
  } catch (err) {
    console.log("Error in connecting to database", err);
  }
};
