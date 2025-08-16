import checkNumber from "../utils/checkNumber.js";
import generateOtp from "../utils/generateOtp.js";

const generateOTP = async (req, res) => {
  const phoneNo = req.body.phone;

  try {
    const NumberResponse = checkNumber(phoneNo); //Check no. is valid or not

    if (!NumberResponse) {
      throw new Error("Plese Enter valid Phone Number");
    }

    const OtpResponse = generateOtp(); //Generate OTP
    console.log(OtpResponse);
    
    const privacyNo = "xxxxxx" + phoneNo.slice(-4);

    res.status(200).json({
      message: `OTP sent successfully to ${privacyNo}`,
    });
  } 
  catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

export { generateOTP };
