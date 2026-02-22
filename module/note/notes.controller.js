import { noteModel } from "../../database/models/notes.model.js";
import redisClient from "../../database/redis.js";


export const getAllnotes = async (req, res) => {
  try {
  if (redisClient.isOpen) {
      const cachedNotes = await redisClient.get("notes");
      if (cachedNotes) {
        console.log("Serving from cache");
        return res.status(200).json({ message: "all notes (cached)", Notes: JSON.parse(cachedNotes) });
      }
    }


    

    const notes = await noteModel.find().select(["title", "content"]).populate("createdby", "name email");

    if (redisClient.isOpen) {
      await redisClient.setEx("notes", 3600, JSON.stringify(notes));
    }

    res.status(200).json({ message: "all notes", Notes: notes })
  } catch (err) {
    return res.status(404).json({ message: err.message })
  }
}










export const createNote = async (req, res) => {
  try {
    const Note = await noteModel.create(req.body);

    if (redisClient.isOpen) {
      await redisClient.del("notes");
    }

    res.status(200).json({ message: "success created", Note: Note })
  }
  catch (err) {
    return res.status(404).json({ message: err.message })
  }
}
