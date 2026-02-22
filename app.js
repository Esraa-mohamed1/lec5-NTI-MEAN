import express from "express"
import userRouter from "./module/user/user.routes.js"
import { noterouter } from "./module/note/note.routes.js"
import { gerror } from "./middelware/gerror.js"
import path from "path"
import { fileURLToPath } from "url";



const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const app = express();

app.use(gerror)


app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, "views", "chat.html"))
});



app.use(express.json())
app.use(userRouter, noterouter)

