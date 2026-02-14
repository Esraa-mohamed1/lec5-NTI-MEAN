import { noteModel } from "../../database/models/notes.model.js";

export const createNote = async (req, res) => { 
   try{ await noteModel.create(req.body)
res.status(200).json({message:"success created",Note:createNote})
}
catch(err){
    return res.status(404).json({message:err.message})
}}


export const getAllnotes = async(req,res) =>{
  try{
    const notes  = await noteModel.find().select(["title","content"]).populate("createdby","name email");
    res.status(200).json({message:"all notes",Notes:notes})
  }catch(err){
    return res.status(404).json({message:err.message})}

    
  }
















// const notesmodle = require('../../database/models/notes.model.js')


// exports.getAllnotes = async(req,res) =>{
 
//     try{
//         const notes  = await notesmodle.find()
            
//         if(notes.length ==0 ){
//         return res.status(404).json({message:"no notes for any notes"})

//         }
//             res.status(200).json({message:"all notes",Notes:notes})



//     }catch(err){
//         return res.status(404).json({message:err.message})
//     }
// }
// exports.createNote = async(req,res) =>{
 
//     try{
//         const {title,content,createdby} = req.body
//         const note = await notesmodle.create({
//       title,
//       content,
//       createdby
//         })

//       res.status(200).json({message:"success deleted",Note:note})

//     }catch(err){
//         return res.status(404).json({message:err.message})
//     }
// }

// exports.getnoteById= async(req,res) =>{
//     try{
//         const note = await notesmodle.findById({
//             _id:req.params.noteId,
//             user:req.params.userId,

//         })
//               if(!note){
//         return res.status(404).json({message:"erorr in id"})

//         }

//       res.status(200).json({message:"note information",Note:note})



//     }catch(err){
//         return res.status(404).json({message:err.message})
//     }
// }



// exports.DeleteNote = async(req,res) =>{
 
//     try{
//         const Note = await notesmodle.findByIdAndDelete({
//             _id:req.params.noteId,
//             user:req.params.userId,

//         })
//               if(!Note){
//         return res.status(404).json({message:"erorr in id"})

//         }
//       res.status(200).json({message:"success deleted",Note:[]})

//     }catch(err){
//         return res.status(404).json({message:err.message})
//     }
// }
// exports.UpdateNote = async(req,res) =>{
 
//     try{
//         const Note = await notesmodle.findByIdAndUpdate({
//             _id:req.params.noteId,
//             user:req.params.userId,
//         },req.body,{new:true})
//               if(!Note){
//         return res.status(404).json({message:"erorr in id"})

//         }
//       res.status(200).json({message:"success deleted",User:user})

//     }catch(err){
//         return res.status(404).json({message:err.message})
//     }
// }
