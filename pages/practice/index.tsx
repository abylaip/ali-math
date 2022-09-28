import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const PracticePage = () => {
  const router = useRouter();
  const content = {
    initial: (
      <p>
        In this practice mode calculate the result of the
        <br /> multiplication to imrpove! Do not worry, I will be here! Note
        <br />
        that practice does not end until you press{" "}
        <span className="text-blue-800">EXIT</span>. Press{" "}
        <span className="text-blue-800">START</span> to begin.
      </p>
    ),
    wrong: <p>Wrong. Hey, try again! </p>,
    correct: <p>Wow! Correct. You are doing great. </p>,
  };
  const [state, setState] = useState({
    case: 0,
    ans: "",
    text: content.initial,
    buttonText: "Start",
  });

  const check = () => {
    if (state.ans === "21") {
      setState({
        ...state,
        case: 2,
        text: content.correct,
        buttonText: "Next",
      });
    } else {
      setState({ ...state, text: content.wrong });
    }
  };
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
          <div className={`bubble ${state.case === 1 ? "hidden" : "block"}`}>
            <div className="text-2xl text-white">{state.text}</div>
          </div>
        </div>
      </div>
      <div
        className={`flex items-center justify-center text-7xl py-20 space-x-4 ${
          state.case === 0 ? "hidden" : "block"
        }`}
      >
        <p>7 x 3 =</p>
        <input
          type="text"
          className={`w-20 h-20 border text-center ${
            state.case === 2 ? "border-green-500" : "border-black"
          }`}
          onChange={(e) => setState({ ...state, ans: e.target.value })}
        />
      </div>
      <Link href="/">
        <a className="rounded-lg bg-blue-600 py-2 px-8 text-white text-3xl text-center absolute left-4 bottom-4 uppercase">
          Exit
        </a>
      </Link>
      <button
        onClick={() => {
          if (state.case === 0) {
            setState({ ...state, case: 1, buttonText: "Check" });
          } else if (state.case === 1) {
            check();
          } else if (state.case === 2) {
            router.push("/");
          }
        }}
        className="rounded-lg bg-blue-600 py-2 px-8 text-white text-3xl text-center absolute right-4 bottom-4 uppercase"
      >
        {state.buttonText}
      </button>
    </div>
  );
};

export default PracticePage;
