import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.svg";
export default function ResetPassword() {
  return (
    <div className="flex h-full w-full  bg-backgroundColor bg-[url('../../public/bg.png')] bg-cover">
      <div className="ml-10 mt-6 items-start   flex flex-row">
        <Image src={logo} alt="logo" width={70} height={70} />
        <h1 className="text-3xl items-center ml-2 mt-1 font-mono font-semibold">
          <span className="text-headingColor">Code</span>
          <span className="text-white">tion</span>
        </h1>
      </div>
      <div className=" flex flex-col  ml-auto mr-60 mb-28 px-10 mt-16 h-auto  bg-authContainer rounded-lg border-2">
        <div className=" flex  flex-col justify-center px-8  py-9  items-center w-full ">
          <h1 className="text-3xl font-medium  pb-2 font-libre ">Reset Password</h1>
          <p className="text-center font-light">Create a new secure passwore</p>
        </div>
        <form className="bg-authContainer px-2 rounded  ">
          <div className="relative flex items-center ">
            <input
              className="border rounded-md px-12 py-4 mb-5 bg-authContainer w-full  focus:border-headingColor  focus:outline-none "
              id="Password"
              placeholder="New Password"
              type="text"
            ></input>
            <div className="absolute inset-y-0 left-0 pl-4 pb-4  flex items-center pointer-events-none">
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
          <div className="relative flex items-center mb-2 ">
            <input
              className="border rounded-md px-12 py-4 mb-5 bg-authContainer w-full  focus:border-headingColor  focus:outline-none "
              id="Confirm Password"
              placeholder="Confirm new Password"
              type="text"
            ></input>
            <div className="absolute inset-y-0 left-0 pl-4 pb-4  flex items-center pointer-events-none">
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

          <button
            type="submit"
            className="bg-headingColor hover:bg-headingColor text-lg  text-white font-bold py-3 w-full mb-6 px-4 rounded-lg"
          >
            Reset
          </button>
          <Link href="/login">
            <div className="flex justify-center w-full ">
              <button className="flex justify-center items-center border-2  border-headingColor rounded-lg  py-3 w-full">
                <span className="text-xl font-semibold   text-headingColor">
                  Back to log In
                </span>
              </button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}
