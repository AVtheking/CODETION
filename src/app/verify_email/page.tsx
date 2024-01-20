"use client";
import axios from "axios";
import cookie from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import loadingIcon from "../../../public/loading.svg";
import logo from "../../../public/logo.svg";
import { OtpInput } from "../Components/OtpInput";
import { baseUrl } from "../utils/constants";

export default function Verify() {
  const router = useRouter();
  const [otp, setOtp] = useState<string>("");
  const [otpError, setOtpError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(false);
  const email = cookie.get("Email");

  const handleOtpComplete = async (otp: string) => {
    setOtp(otp);

    console.log(otp);
  };
  const verify = async () => {
    console.log(email);
    setLoading(true);
    try {
      const res = await axios.post(`${baseUrl}api/verify/`, {
        email,
        otp,
      });
      console.log(res.data);
      setLoading(false);
      if (res.data.success) {
        toast.success("Email verified successfully");
        // router.push("/home");
      }
    } catch (e: any) {
      setLoading(false);
      setOtpError("Incorrect OTP,Please check and try again");
      toast.error("Otp is invalid");
      console.log(e.response.data);
    }
  };
  const resendOtp = async () => {
    setIsResendDisabled(true);
    if (isResendDisabled) {
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${baseUrl}api/resend-otp/`, {
        email,
      });
      console.log(res);
      setLoading(false);
      if (res.data.success) {
        toast.success("Otp sent successfully");
      }
    } catch (e: any) {
      setLoading(false);
      toast.error("Network Error");
      console.log(e.response.data.message);
    }
    
    setTimeout(() => {
      setIsResendDisabled(false);
    }, 60000);
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
        <OtpInput
          numberOfDigits={6}
          onOtpComplete={handleOtpComplete}
          error={otpError}
        />
        {otpError && (
          <div className="text-red-500 text-sm font-semibold">{otpError}</div>
        )}
        <div
          className={`ml-auto mr-auto mb-5 font-sans font-bold pt-7 cursor-pointer text-headingColor ${
            isResendDisabled ? "opacity-50" : ""
          }`}
          onClick={!isResendDisabled ? resendOtp : undefined}
        >
          Resend OTP
        </div>
        <button
          className="flex justify-center items-center bg-headingColor hover:bg-headingColor text-lg  text-white font-bold py-3  mb-6 px-4 rounded-lg"
          onClick={verify}
        >
          {loading ? (
            <Image src={loadingIcon} className="animate-spin" alt="Loading" />
          ) : (
            "Verfiy"
          )}
        </button>
        <Link href="/">
          <div className="flex justify-center w-full ">
            <button
              disabled={loading}
              className="flex justify-center items-center border-2  border-headingColor rounded-lg  py-3 w-full"
            >
              <span className="text-xl font-semibold   text-headingColor">
                Back to Sign Up
              </span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
