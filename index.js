import { app } from "./app.js"
import { dbconnection } from "./database/dbconnection.js"
import dotenv from "dotenv"
import { createServer } from "http"
import { intiSocket } from "./chat/chat.socket.js";
dotenv.config();


const httpserver = createServer(app)

intiSocket(httpserver)


const port = 5000;
dbconnection();
httpserver.listen(port, () => {
    console.log(`server is running on port ${port}`);
})