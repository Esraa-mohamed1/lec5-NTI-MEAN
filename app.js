import express from "express"
import userRouter from "./module/user/user.routes.js"
import {noterouter} from "./module/note/note.routes.js"
export const app = express();
app.use(express.json())
app.use( userRouter, noterouter)

