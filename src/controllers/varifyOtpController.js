

const verifyOtpControllers = async (req, res) => {
//  const otpInput=req.body.otp;

 try{
    // varifyOtp();
    // if(otpInput!==otp){
    //     throw new Error("Plese enter valid Email");
    // }
    res.status(200).json({
        message:"Otp varified"
    })
 }
 catch(err){
    res.status(400).json({ 
        erorr:err.message
    })
 }
};

export { verifyOtpControllers };