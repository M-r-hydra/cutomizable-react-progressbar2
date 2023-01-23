// React
import React from "react";
// React
// CSS
// CSS
// Components
import CircleProgressbar from "./Components/CircleProgressBar/CircleProgressBar";
// Components

const App = () => {
  const score = 50;
  const targetScore = 100;
  return (
    <div>
      <CircleProgressbar
        fontColor={"#FDB813"}
        innerHtml={
          <div
            className={`w-full h-full absolute flex flex-col items-center justify-center`}
          >
            <div className="text-base">{score}</div>
            <div className="flex flex-row items-center justify-between">
              <span>امتیاز</span>
              <span className="pl-1">{targetScore}</span>
            </div>
          </div>
        }
        primaryColors={["#D24D14", "#FDB813"]}
        progressValue={((): number => {
          if (Math.round((score / targetScore) * 100) <= 30) {
            return Math.round((score / targetScore) * 100) / 1.5;
          } else if (Math.round((score / targetScore) * 100) <= 50) {
            return Math.round((score / targetScore) * 100) / 1.6;
          } else if (Math.round((score / targetScore) * 100) <= 75) {
            return Math.round((score / targetScore) * 100) / 1.8;
          } else {
            return Math.round((score / targetScore) * 100) / 1.9;
          }
        })()}
        strokeSize={6}
        width={90}
        bgStrokeColor="rgba(186, 186, 186, 1)"
      />
    </div>
  );
};

export default App;
