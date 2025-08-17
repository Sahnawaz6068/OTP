import { otpStore } from "./otpController.js";

const verifyOtpControllers = async (req, res) => {
  const { phone, otp: otpInput } = req.body;

  try {
    const OtpData = otpStore[phone]; // Get OTP data for that phone --->    otpStore={phone1:{otp,experyAt,used},phone2:{otp,experyAt,used},}

    if (!OtpData) {
      return res.status(400).json({ error: "No OTP found for this number" });
    }

    if (Date.now() > OtpData.expiresAt) {
      return res.status(400).json({ error: "OTP expired" });
    }

    if (OtpData.used) {
      return res.status(400).json({ error: "OTP already used" });
    }

    if (otpInput !== OtpData.otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    // Mark OTP as used
    OtpData.used = true;

    

    return res.status(200).json({ message: "OTP verified successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export { verifyOtpControllers };
