import express from "express";
import { connectionDB } from "./utils/db.js";
import { config } from "dotenv";
import OtpRoute from "./routes/v1/otp.js"; 

config({ path: "./.env" });

const app = express();


app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Testing the Setup");
});

app.use("/api/v1/otp", OtpRoute); 

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

async function startApp() {
  try {
    await connectionDB(DB_URL);
    console.log("DB is connected ");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  } catch (err) {
    console.error(err.message);
    console.log("Something went wrong ");
  }
}

startApp();
