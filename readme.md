# Validation Task
### STEPs
- 1.Setup env file as given in envExample file
- 2.Run npm i that's it and go
- Go to Route http://localhost:3000/api/v1/otp/generate-otp 
for generating otp You can check put the varous number to check validation as i serarch on the google wikipedia say indian number starts with 6,7,8 or 9 and it soud be of 10 digit because user is not going to start his number with +91 so any point to make validation on that.
- Make post request at http://localhost:3000/api/v1/otp/generate-otp 
## Note Check Your port on which port the server is running You can see it in the Terminal here i take the example of port - 3000 you can change as you wish , if you do not put anything then it run on 5000 ,
- Pass body as given below
{
    "phone":"Enter Your Phone Number"
}

## Verify the OTP
### On making post req at generate otp you get otp in your terminal put that otp in body of your second request this 
http://localhost:3000/api/v1/otp/verify-otp

second requestion body something like this 
{
    "phone":"Your Number ",
    "otp":"OTP"
}

You can check for Wrong number && right otp || right number && wrong otp
- Also try to make request frequently 