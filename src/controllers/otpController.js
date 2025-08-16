import checkNumber from "../utils/checkNumber.js";
import generateOtp from "../utils/generateOtp.js";

const generateOTP = async (req, res) => {
  const phoneNo = req.body.phone;

  const response = checkNumber(phoneNo); //Check no. is valid or not
  if (!response) {
    throw new Error("Plese Enter valid Phone Number");
  }
  
  try {
    const response = generateOtp(); //Generate OTP
    console.log(response);
    res.status(200).json({
      message: `OTP sent successfully to ${phoneNo}`,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

export { generateOTP };
