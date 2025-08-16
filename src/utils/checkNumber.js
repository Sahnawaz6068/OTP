const checkNumber = (phoneNo) => {
  if (phoneNo.length !== 10) {
    //as on wikipedia it shows indian phone number start from 9/8/7/6 one more thing +91
    //but user +91 to nahi dial x -->Actual no.
    return false;
  } else if (
    phoneNo[0] === "6" ||
    phoneNo[0] === "7" ||
    phoneNo[0] === "8" ||
    phoneNo[0] === "9"
  ) {
    return true;
  } else {
    return false;
  }
};

export default checkNumber;

//Yaha se hame true and false return karna hoga
