"use client";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import Button from "../Components/Button";
import { OtpInput } from "../Components/OtpInput";
export default function Verify() {
  const handleOtpComplete = (otp: string) => {
    console.log(otp);
  };
  return (
    <div className="flex h-full w-full  bg-backgroundColor bg-[url('../../public/bg.png')] bg-cover">
      <div className="ml-10 mt-6 items-start   flex flex-row">
        <Image src={logo} alt="logo" width={70} height={70} />
        <h1 className="text-3xl items-center ml-2 mt-1 font-mono font-semibold">
          <span className="text-headingColor">Code</span>
          <span className="text-white">tion</span>
        </h1>
      </div>
      <div className=" flex flex-col  ml-auto mr-60 mb-32 px-10 mt-16 h-auto  bg-authContainer rounded-lg border-2">
        <div className=" flex  flex-col justify-center px-8  py-9  items-center w-full ">
          <h1 className="text-2xl  pb-2 font-mono">Verify your Email</h1>
          <p className="text-center font-light">
            Enter 6-digit code we have sent to your
            <br /> registered email
          </p>
        </div>
        <OtpInput numberOfDigits={6} onOtpComplete={handleOtpComplete} />
        <div className=" ml-auto mr-auto mb-5 font-sans font-bold pt-7  text-headingColor">
          Resend OTP
        </div>
        <Button buttonText={"Verify"} />
        <div className="flex justify-center w-full ">
          <button className="flex justify-center items-center border-2  border-headingColor rounded-lg  py-3 w-full">
            <span className="text-xl font-semibold   text-headingColor">
              Back to Sign Up
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
