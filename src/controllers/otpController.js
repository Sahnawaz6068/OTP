import checkNumber from "../utils/checkNumber.js";
import generateOtp from "../utils/generateOtp.js";

const otpStore = {}; 

const generateOTP = async (req, res) => {
  const phoneNo = req.body.phone;

  try {
    const NumberResponse = checkNumber(phoneNo); //Check no. is valId or not

    if (!NumberResponse) {
      throw new Error("Plese Enter valid Phone Number");
    }

    const otp = generateOtp(); //Generate
    console.log(otp);

    otpStore[phoneNo] = { 
      otp,//Store otp in Local Storage
      expiresAt: Date.now() + 2 * 60 * 1000, 
      used:false
    };

    console.log("Otp store "+otpStore);

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

export { generateOTP,otpStore };
