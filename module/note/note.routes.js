import express from "express";
import { createNote, getAllnotes } from "./notes.controller.js";
export const noterouter = express.Router();

noterouter.get("/notes", getAllnotes);
noterouter.post("/notes", createNote);