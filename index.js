import {app} from "./app.js"
import {dbconnection} from "./database/dbconnection.js"
import   dotenv from  "dotenv"

dotenv.config();



const port = 5000;

dbconnection();
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})