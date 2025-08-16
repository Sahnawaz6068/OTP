import { Router } from "express";
import { generateOTP } from "../../controllers/otpController.js";
import { verifyOtpControllers } from "../../controllers/varifyOtpController.js";

const OtpRoute = Router();

OtpRoute.get("/", (req, res) => {
  res.send("hello");
});

//Generate OTP
OtpRoute.post("/generate-otp", generateOTP);

//VArify OTP
OtpRoute.post("/verify-otp", verifyOtpControllers);


export default OtpRoute;
