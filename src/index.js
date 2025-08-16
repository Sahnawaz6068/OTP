import express from 'express';
import { connectionDB } from "./utils/db.js";
import {config} from 'dotenv';

config({path:"./.env"});



const app=express();

app.get("/test",(req,res)=>{
    res.send("Trsting the Setup")
})

const PORT=process.env.PORT;
const DB_URL=process.env.DB_URL;
console.log(DB_URL)

async function startApp() {
  try {
    await connectionDB(DB_URL);
    console.log("db is connected");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  } catch (err) {
    console.error(err.message);
    console.log("something wrong happen");
  }
}

startApp();