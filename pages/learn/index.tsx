import Link from "next/link";
import { useState } from "react";

const LearnPage = () => {
  const content = [
    {
      text: (
        <p className="text-2xl text-white">
          Let’s learn multiplication! Do not worry, your friend
          <br /> Doraemon will help you!
        </p>
      ),
      component: null,
    },
    {
      text: (
        <p>
          Multiplication is a shorter version of addition. For example, if we
          <br />
          multiply <span className="text-blue-800">7</span> by{" "}
          <span className="text-blue-800">3</span>, we get{" "}
          <span className="text-blue-800">21</span>. Why? Because we added{" "}
          <span className="text-blue-800">7</span>
          <br /> three times! Or it is the same as adding{" "}
          <span className="text-blue-800">3</span> seven times.
        </p>
      ),
      component: <SecondContent />,
    },
    {
      text: (
        <p>
          Now, let’s understand the multiplication table. It is a simple
          <br /> way of representing multiplication of numbers from{" "}
          <span className="text-blue-800">1</span> to{" "}
          <span className="text-blue-800">10</span>. Study it!
        </p>
      ),
      component: <ThirdContent />,
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <div className="bg-white w-full h-screen p-4 relative">
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 p-4 w-full h-2/6 flex flex-row items-center justify-center space-x-16 relative">
        <div className="absolute top-3 left-14 flex w-full space-x-10">
          <img
            src="/icons/doraemon.svg"
            alt=""
            className=""
            width={200}
            height={200}
          />
          <div className="bubble">
            <div className="text-2xl text-white">{content[index].text}</div>
            <div className="flex justify-between w-full">
              <button
                onClick={() => {
                  setIndex(index - 1);
                  console.log(index);
                }}
                className={`p-3 bg-blue-500 rounded-lg text-white ${
                  index === 0 ? "invisible" : "visible"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 transform rotate-180"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  setIndex(index + 1);
                }}
                className={`p-3 bg-blue-500 rounded-lg text-white ${
                  index === 2 ? "invisible" : "visible"
                } `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {content[index].component}
      <Link href="/">
        <a
          className={`rounded-lg bg-blue-600 py-2 px-8 text-white text-3xl text-center absolute left-4 bottom-4 ${
            index === 2 ? "hidden" : "block"
          }`}
        >
          Exit
        </a>
      </Link>
      <Link href="/">
        <a
          className={`rounded-lg bg-blue-600 py-2 px-8 text-white text-3xl text-center absolute right-4 bottom-4 ${
            index === 2 ? "block" : "hidden"
          }`}
        >
          Finish
        </a>
      </Link>
    </div>
  );
};

const SecondContent = () => {
  return (
    <div className="flex flex-col space-y-10 text-7xl items-center justify-center font-semibold py-4">
      <p className="">
        <span className="text-blue-700"> 7 </span>
        <span className="text-green-500"> x </span>
        <span className="text-blue-700"> 3 </span>
        <span className="text-green-500"> = </span>
        <span className="text-red-700"> 21 </span>
      </p>
      <p className="">
        <span className="text-blue-700"> 7 </span>
        <span className="text-green-500"> x </span>
        <span className="text-blue-700"> 3 </span>
        <span className="text-green-500"> = </span>
        <span className="text-blue-700"> 7 </span>
        <span className="text-green-500"> + </span>
        <span className="text-blue-700"> 7 </span>
        <span className="text-green-500"> + </span>
        <span className="text-blue-700"> 7 </span>
        <span className="text-green-500"> = </span>
        <span className="text-red-700"> 21 </span>
      </p>
      <p className="">
        <span className="text-blue-700"> 7 </span>
        <span className="text-green-500"> x </span>
        <span className="text-blue-700"> 3 </span>
        <span className="text-green-500"> = </span>
        <span className="text-blue-700"> 3 </span>
        <span className="text-green-500"> + </span>
        <span className="text-blue-700"> 3 </span>
        <span className="text-green-500"> + </span>
        <span className="text-blue-700"> 3 </span>
        <span className="text-green-500"> + </span>
        <span className="text-blue-700"> 3 </span>
        <span className="text-green-500"> + </span>
        <span className="text-blue-700"> 3 </span>
        <span className="text-green-500"> + </span>
        <span className="text-blue-700"> 3 </span>
        <span className="text-green-500"> + </span>
        <span className="text-blue-700"> 3 </span>
        <span className="text-green-500"> = </span>
        <span className="text-red-700"> 21 </span>
      </p>
    </div>
  );
};

const ThirdContent = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <img src="/icons/mult-table.png" alt="" className=" h-96" />
    </div>
  );
};

export default LearnPage;
