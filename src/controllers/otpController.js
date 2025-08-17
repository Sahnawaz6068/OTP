import checkNumber from "../utils/checkNumber.js";
import generateOtp from "../utils/generateOtp.js";

const otpStore = {};

const generateOTP = async (req, res) => {
  const phoneNo = req.body.phone;

  try {
    const NumberResponse = checkNumber(phoneNo);

    if (!NumberResponse) {
      throw new Error("Plese Enter valid Phone Number");
    }

    const otp = generateOtp();
    console.log(otp);

    console.log("Otp store " + otpStore);

    if (otpStore[phoneNo]) {
      const userData = otpStore[phoneNo];

      if (Date.now() - userData.lastSent < 1 * 60 * 1000) {
        throw new Error(
          `Plese try after ${(Date.now() - userData.lastSent) / 1000}`
        );
      }

      if (Date.now() - userData.firstRequestTime < 5 * 60 * 1000) {
        if (userData.count >= 3) {
          throw new Error(
            "Too many OTP requests. Please try again after some minutes."
          );
        }
      } else {
        userData.count = 0;
        userData.firstRequestTime = Date.now();
      }
    }

    otpStore[phoneNo] = {
      otp,
      expiresAt: Date.now() + 2 * 60 * 1000,
      used: false,
      count: (otpStore[phoneNo]?.count || 0) + 1,
      firstRequestTime: otpStore[phoneNo]?.firstRequestTime || Date.now(),
      lastSent: Date.now(),
    };

    const privacyNo = "xxxxxx" + phoneNo.slice(-4);

    res.status(200).json({
      message: `OTP sent successfully to ${privacyNo}`,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

export { generateOTP, otpStore };
