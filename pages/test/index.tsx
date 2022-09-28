import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface Task {
  f: number;
  s: number;
}

const TestPage = ({ tasks }: any) => {
  const router = useRouter();
  const [state, setState] = useState({
    started: false,
    index: 0,
    ans: "",
    results: [],
    last: false,
    buttonText: "Start",
    score: 0,
  });

  useEffect(() => {
    // по идее нельзя в useEffect использовать useState но в данный момент озимизго
    console.log(tasks);
    let tempResults: any = [];
    for (let i = 0; i < 10; i++) {
      tempResults.push(null);
    }
    setState({ ...state, results: tempResults });
  }, []);

  const check = () => {
    if (state.index === 10) {
      setState({ ...state, last: true, buttonText: "Finish" });
      console.log(state);
    } else {
      if (tasks[state.index].f * tasks[state.index].s === parseInt(state.ans)) {
        let tempRes: any = [...state.results];
        tempRes[state.index] = true;
        setState({
          ...state,
          results: tempRes,
          index: state.index + 1,
          score: state.score + 1,
          ans: "",
        });
      } else {
        let tempRes: any = [...state.results];
        tempRes[state.index] = false;
        setState({
          ...state,
          results: tempRes,
          index: state.index + 1,
          ans: "",
        });
      }
    }
    console.log(state);
  };

  return (
    <div className="bg-white w-full h-screen p-4 relative">
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 p-4 w-full h-2/6 flex flex-row items-center justify-center space-x-16 relative">
        {state.started ? (
          <div className="flex flex-row space-x-2">
            {state.index === 10
              ? state.results.map((item) => (
                  <div className="p-1 bg-white rounded-full">
                    <div
                      className={`${
                        item === true ? "bg-green-500" : "bg-red-500"
                      } rounded-full h-16 w-16 `}
                    ></div>
                  </div>
                ))
              : state.results.map((item) => (
                  <div className="p-1 bg-white rounded-full">
                    <div
                      className={`bg-blue-800 rounded-full h-16 w-16 ${
                        item !== null ? "visible" : "invisible"
                      }`}
                    ></div>
                  </div>
                ))}
          </div>
        ) : (
          <div className="absolute top-3 left-14 flex w-full space-x-10">
            <img
              src="/icons/doraemon.svg"
              alt=""
              className=""
              width={200}
              height={200}
            />
            <div className={`bubble`}>
              <div className="text-2xl text-white">
                In this test mode calculate the result of the multiplication to
                <br /> score a point. There are 10 questions. Press{" "}
                <span className="text-blue-800">EXIT</span> to finish the
                <br /> test. Press <span className="text-blue-800">
                  START
                </span>{" "}
                to begin. Here you will be on your own, good
                <br /> luck!
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`flex items-center justify-center text-7xl py-20 space-x-4 ${
          state.started === false ? "hidden" : "block"
        }`}
      >
        {state.index === 10 ? (
          <>Your score: {state.score} / 10</>
        ) : (
          <>
            <p>
              {tasks[state.index]?.f} x {tasks[state.index]?.s} =
            </p>
            <input
              type="text"
              className="w-32 h-20 border text-center"
              value={state.ans}
              onChange={(e) => setState({ ...state, ans: e.target.value })}
            />
          </>
        )}
      </div>
      <Link href="/">
        <a className="rounded-lg bg-blue-600 py-2 px-8 text-white text-3xl text-center absolute left-4 bottom-4 uppercase">
          Exit
        </a>
      </Link>
      <button
        onClick={() => {
          if (state.last === true) {
            router.push("/");
          } else if (state.started === true) {
            check();
          } else if (state.started === false) {
            setState({
              ...state,
              started: true,
              buttonText: "Next",
            });
          }
        }}
        className="rounded-lg bg-blue-600 py-2 px-8 text-white text-3xl text-center absolute right-4 bottom-4 uppercase"
      >
        {state.buttonText}
      </button>
    </div>
  );
};

export async function getStaticProps() {
  const tasks = [];
  for (let i = 0; i < 10; i++) {
    tasks.push({
      f: Math.floor(Math.random() * (10 - 1 + 1) + 1),
      s: Math.floor(Math.random() * (10 - 1 + 1) + 1),
    });
  }
  return {
    props: {
      tasks: tasks,
    },
  };
}

export default TestPage;
