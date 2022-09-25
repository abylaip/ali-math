import React, { useState } from "react";
import { Modal } from "@components/modal";
import Link from "next/link";

const Home: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-white w-full h-screen p-4">
      <Modal showModal={show} setShowModal={setShow}>
        <div className="flex items-center justify-center w-full py-10 px-20">
          <ul className="list-disc text-3xl space-y-4">
            <li>
              Press ‘Learn’ button if you want to learn about multiplication
              table through examples.
            </li>
            <li>
              Press ‘Practice’ if you want to understand multiplication talble
              more and practice on multiplication.
            </li>
            <li>
              Press ’Test’ if you want to know how good you are in
              multiplication.
            </li>
          </ul>
        </div>
      </Modal>
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 p-4 w-full h-full flex flex-row items-center justify-center space-x-16">
        <div className="w-6/12 h-4/6 bg-white rounded-lg shadow-lg relative">
          <button
            onClick={() => setShow(true)}
            className="absolute top-5 left-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </button>
          <img src="/icons/doraemon.svg" alt="" className="absolute top-16" />
          <img
            src="/icons/conv-1.svg"
            alt=""
            className="absolute right-1 top-5"
          />
          <p className="absolute top-8 right-20 text-lg text-white">
            My name is Doraemon!
            <br />
            Nice o meet you!
            <br /> Let’s learn multiplication
            <br /> table together. To decide
            <br /> which mode to choose
            <br /> press the question mark!
          </p>
        </div>
        <div className="w-4/12 h-4/6 bg-white rounded-lg shadow-lg py-10 px-10 flex flex-col space-y-5 items-center justify-center">
          <Link href="/learn">
            <a className="rounded-lg bg-blue-500 py-4 w-5/6 text-white text-3xl text-center">
              Learn
            </a>
          </Link>
          <Link href="/practice">
            <a className="rounded-lg bg-blue-600 py-4 w-5/6 text-white text-3xl text-center">
              Practice
            </a>
          </Link>
          <Link href="/test">
            <a className="rounded-lg bg-blue-700 py-4 w-5/6 text-white text-3xl text-center">
              Test
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
