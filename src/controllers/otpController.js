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
      otp, //Store otp in Local Storage
      expiresAt: Date.now() + 2 * 60 * 1000,
      used: false,
      count: (otpStore[phoneNo]?.count || 0) + 1,//Each request pe increase by 1
      firstRequestTime: otpStore[phoneNo]?.firstRequestTime || Date.now(),
    };

    console.log("Otp store " + otpStore);

    //LIMIT LOGIC
    if (otpStore[phoneNo]) { //For phoneNo this check the time is more than 5 minute
      const userData = otpStore[phoneNo];
      if (Date.now() - userData.firstRequestTime < 5 * 60 * 1000) {
        if (userData.count >= 3) {
          throw new Error(
            "Too many OTP requests. Please try again after some minutes."
          );
        }
      } else {
        userData.count = 0;
        userData.firstRequestTime = Date.now();;
      }
    }

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
