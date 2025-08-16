import { Router } from "express";
import { generateOTP } from "../../controllers/otpController.js";

const OtpRoute = Router();

OtpRoute.get("/", (req, res) => {
  res.send("hello");
});

OtpRoute.post("/generate-otp", generateOTP);

// OtpRoute.post("/verify-otp", ...)

export default OtpRoute;
