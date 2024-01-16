import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.svg";
export default function ForgetPassword() {
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
          <h1 className="text-2xl  pb-2 font-mono">Forget Password</h1>
          <p className="text-center font-light">
            Enter your registered email below and we
            <br /> will send you 6-digit code
          </p>
        </div>
        <form className="bg-authContainer px-2 rounded  ">
          <div className="relative flex items-center mb-10">
            <input
              className="border rounded-md px-12 py-4 mb-5 bg-authContainer w-full  focus:border-headingColor  focus:outline-none "
              id="Email"
              placeholder="Email"
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

          <button
            type="submit"
            className="bg-headingColor hover:bg-headingColor text-lg  text-white font-bold py-3 w-full mb-6 px-4 rounded-lg"
          >
            Send Code
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
