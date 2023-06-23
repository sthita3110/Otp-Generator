import { useState } from "react";
import "./OtpGenerator.css";
const OtpGenerator = () => {
  const [Otp, setOtp] = useState("");
  const otpGenerateHandler = () => {
    const num = "0987654321";
    let otpValue = "";

    const otp = num[Math.floor(Math.random() * 10)];
    for (let i = 0; i < 4; i++) {
      otpValue += num[Math.floor(Math.random() * 10)];
    }
    console.log(otpValue);
    setOtp(otpValue);
  };
  const otpValueMessage = (
    <p className="otp-value">
      your otp is:- <span> {Otp}</span>
    </p>
  );
  const noOtpMessage = <p>please click on above button to generate otp</p>;

  return (
    <>
      <div>
        <div className=" flex justify-center items-center mt-5">
          <button className="btn btn-success" onClick={otpGenerateHandler}>
            Generate Otp
          </button>
        </div>
        <div className="flex justify-center items-center mt-3 p-2">
          {Otp && otpValueMessage}
          {!Otp && noOtpMessage}
        </div>
      </div>
    </>
  );
};
export default OtpGenerator;
