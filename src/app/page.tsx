import Image from "next/image";
import Link from "next/link";
import React from "react";
import google from "../../public/google.svg";
import logo from "../../public/logo.svg";
import Button from "./Components/button";
export default function Home() {
  return (
    <div className="flex h-full w-full">
      <div className="ml-10 mt-6 items-start   flex flex-row">
        <Image src={logo} alt="logo" width={70} height={70} />
        <h1 className="text-3xl items-center ml-2 mt-1 font-mono">
          <span className="text-headingColor">Code</span>
          <span className="text-white">tion</span>
        </h1>
      </div>
      <div className=" flex flex-col  ml-auto mr-40 mb-10 px-10 mt-10 w-auto bg-authContainer rounded-lg border-2">
        <div className="flex justify-between px-8  py-9  items-center w-full ">
          <h1 className="text-2xl  cursor-pointer pb-2  border-b-2 font-mono  border-b-headingColor px-4">
            Sign up
          </h1>
          <h1 className="text-2xl cursor-pointer font-mono">
            <Link href="/login">Log in</Link>
          </h1>
        </div>
        <form className="bg-authContainer px-2 rounded  ">
          <div className="relative flex items-center">
            <input
              className="border rounded-md px-9 py-4 mb-5 bg-authContainer w-full focus:border-headingColor  focus:outline-none "
              id="Username"
              placeholder="Username"
              type="text"
            ></input>
            <div className="absolute inset-y-0 left-0 pl-3 pb-4  flex items-center pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16841 14.1211C2.2822 11.615 4.76737 10 7.50977 10H10.4902C13.2326 10 15.7178 11.615 16.8316 14.1211V14.1211C17.8514 16.4156 16.1718 19 13.6609 19H4.33909C1.82819 19 0.148637 16.4156 1.16841 14.1211V14.1211Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 4C6 2.34315 7.34315 1 9 1C10.6569 1 12 2.34315 12 4C12 5.65685 10.6569 7 9 7C7.34315 7 6 5.65685 6 4Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="relative flex items-center">
            <input
              className="border rounded-md px-9 py-4 mb-5 bg-authContainer w-full  focus:border-headingColor  focus:outline-none "
              id="Email"
              placeholder="Email"
              type="text"
            ></input>
            <div className="absolute inset-y-0 left-0 pl-3 pb-4  flex items-center pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12C3 9.67029 3 8.50544 3.3806 7.58658C3.88807 6.36144 4.86144 5.38807 6.08658 4.8806C7.00544 4.5 8.17029 4.5 10.5 4.5H13.5C15.8297 4.5 16.9946 4.5 17.9134 4.8806C19.1386 5.38807 20.1119 6.36144 20.6194 7.58658C21 8.50544 21 9.67029 21 12V12C21 14.3297 21 15.4946 20.6194 16.4134C20.1119 17.6386 19.1386 18.6119 17.9134 19.1194C16.9946 19.5 15.8297 19.5 13.5 19.5H10.5C8.17029 19.5 7.00544 19.5 6.08658 19.1194C4.86144 18.6119 3.88807 17.6386 3.3806 16.4134C3 15.4946 3 14.3297 3 12V12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 8L6.47486 10.7025C8.82448 12.5299 9.99929 13.4436 11.3413 13.6221C11.7788 13.6802 12.222 13.6802 12.6595 13.622C14.0015 13.4436 15.1762 12.5298 17.5258 10.7023L21 8"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="relative flex items-center">
            <input
              className="border rounded-md px-9 py-4 mb-5 bg-authContainer w-full  focus:border-headingColor  focus:outline-none "
              id="Password"
              placeholder=" Your password"
              type="password"
            ></input>
            <div className="absolute inset-y-0 left-0 pl-3 pb-4  flex items-center pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 8V8C17 5.23858 14.7614 3 12 3V3C9.23858 3 7 5.23858 7 8V8M12 15.5V15.5C13.1046 15.5 14 14.6046 14 13.5V13.5C14 12.3954 13.1046 11.5 12 11.5V11.5C10.8954 11.5 10 12.3954 10 13.5V13.5C10 14.6046 10.8954 15.5 12 15.5V15.5ZM12 15.5V18M9.5 21H14.5C16.8346 21 18.0019 21 18.8856 20.5277C19.5833 20.1548 20.1548 19.5833 20.5277 18.8856C21 18.0019 21 16.8346 21 14.5V14.5C21 12.1654 21 10.9981 20.5277 10.1144C20.1548 9.4167 19.5833 8.84525 18.8856 8.47231C18.0019 8 16.8346 8 14.5 8H9.5C7.16537 8 5.99805 8 5.11441 8.47231C4.4167 8.84525 3.84525 9.4167 3.47231 10.1144C3 10.9981 3 12.1654 3 14.5V14.5C3 16.8346 3 18.0019 3.47231 18.8856C3.84525 19.5833 4.4167 20.1548 5.11441 20.5277C5.99805 21 7.16537 21 9.5 21Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </form>
        <div className="flex items-center px-2 text-start text-xs mb-5">
          <input
            className="mr-2 accent-authContainer bg-gray-700"
            id="checkbox"
            name="checkbox"
            type="checkbox"
          ></input>
          <span>
            I agree to Codetion&apos;s{" "}
            <span className="text-headingColor">Terms of services</span> and{" "}
            <span className="text-headingColor">Privacy Policy</span>
          </span>
        </div>
        <Button buttonText={"Create an account"} />
        <div className="flex justify-center w-full mb-4">
          <button className="flex  items-center border-2  border-headingColor rounded-lg pl-14 py-3 w-full">
            <Image src={google} alt="google" />
            <span className="text-lg pl-2 text-white">
              Continue with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
