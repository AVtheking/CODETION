import Link from "next/link";

export default function Home() {
    return (
      <div className="flex h-full w-full">
      <div className="ml-10 mt-5 text-xl  flex flex-row">
        <h1>
        <span className="text-headingColor">Code</span>
          <span className="text-white">tion</span>
        </h1>
        </div>
        <div className=" flex  ml-auto mr-40 mb-10  mt-10 w-96 bg-authContainer rounded-lg border-2" >
        <div className="flex justify-between p-6 items-center w-full ">
            <h1 className="text-lg cursor-pointer"><Link href="/">Sign up   </Link></h1>
            <h1 className="text-lg   cursor-pointer  border-b-2 border-b-headingColor px-4">Log in</h1>
          </div>
        </div>
      </div>
    )
  }