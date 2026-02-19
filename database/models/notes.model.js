import mongoose from "mongoose";



const noteschema = new mongoose.Schema({
    title:String,
    content:String,
    createdby:{
        type:mongoose.Types.ObjectId,
        ref:"User"  },
},
        {timestamps:true,
            versionKey:false

        }

)
export const noteModel = mongoose.model("note",noteschema)