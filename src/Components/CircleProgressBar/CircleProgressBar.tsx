// React
import React, { useEffect } from "react";
// React
// CSS
import styles from "./CircleProgressbar.module.css";
// CSS

type CircleProgressbarProps = {
  progressValue: number;
  width: number;
  strokeSize: number;
  primaryColors: string[];
  innerHtml: React.ReactElement;
  fontColor: string;
  bgStrokeColor: string;
};

const CircleProgressbar: React.FunctionComponent<CircleProgressbarProps> = ({
  progressValue,
  width,
  strokeSize,
  primaryColors,
  innerHtml,
  fontColor,
  bgStrokeColor,
}) => {
  const circleRef = React.createRef<any>();
  useEffect(() => {
    console.log(circleRef.current.children[0]);
    const timeOut = setTimeout(() => {
      // circleRef.current.children[1].style.strokeDashoffset = 100;
    }, 200);
    return () => {
      clearTimeout(timeOut);
    };
  }, [circleRef, progressValue]);
  const copyOfPrimaryolors = [...primaryColors];
  copyOfPrimaryolors.pop();
  copyOfPrimaryolors.shift();

  return (
    <>
      <div
        className={`${styles.skill}`}
        style={{ width: `${width}px`, height: `${width}px` }}
      >
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div id={styles.number} style={{ color: fontColor }}>
              {innerHtml}
            </div>
          </div>
        </div>

        <svg width={width} height={width} ref={circleRef}>
          <circle
            className={styles.bg}
            cx={width / 1.7 + 8}
            cy={width / 1.7 + 8}
            r={width / 1.7 - strokeSize - 8}
            strokeLinecap="round"
            strokeWidth={strokeSize - 4}
            stroke={bgStrokeColor}
          />

          <circle
            className={styles.meterOne}
            cx={width / 1.7 + 8}
            cy={width / 1.7 + 8}
            r={width / 1.7 - strokeSize - 8}
            style={{ transform: "translate(-15px , -15px)" }}
            fill="transparent"
            strokeLinecap="round"
            strokeWidth={strokeSize}
            strokeDashoffset={
              2 * Math.PI * (width / 1.7 + 8) -
              2 * Math.PI * (width / 1.7 + 8) * progressValue * 0.01
            }
            strokeDasharray={2 * Math.PI * (width / 1.6 + 8)}
          />
          <defs>
            <linearGradient id="GradientColor">
              {primaryColors.reverse().map((item, index) => (
                <stop
                  key={item}
                  offset={((): string => {
                    if (index === 0) return "0%";
                    else if (index === primaryColors.length - 1) return "100%";
                    else {
                      return 100 / (index + 1) + "%";
                    }
                  })()}
                  stopColor={item}
                />
              ))}
              {}
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default CircleProgressbar;
