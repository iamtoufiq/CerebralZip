import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";

const redValue = 22;
const yellowValue = 34;
const greenValue = 134;

interface SentimentData {
  negative: number;
  positive: number;
  neutral: number;
}

const RightMostlyPositive = () => {
  const { data } = useFetchData<SentimentData>(
    "sample_assignment_api_5/"
  );
  const [redWidth, setRedWidth] = useState(0);
  const [yellowWidth, setYellowWidth] = useState(0);
  const [greenWidth, setGreenWidth] = useState(0);

  useEffect(() => {
    if (data) {
      const total = data.negative + data.neutral + data.positive;

      if (total > 0) {
        setTimeout(() => {
          setRedWidth((data.negative / total) * 100);
          setYellowWidth((data.neutral / total) * 100);
          setGreenWidth((data.positive / total) * 100);
        }, 100);
      }
    }
  }, [data]);
  return (
    <div
      className="flex flex-col p-6 gap-4 rounded-2xl bg-white w-full"
    >
      <div id="_data" className="flex flex-col gap-[6px]">
        <p className="text-[12.3px] text-[#C1C1C3] leading-[14.89px]">
          Community feedback
        </p>
        <h3 className="text-[17.8px] text-[#7B7B80] leading-[21.54px] font-semibold ">
          Mostly positive
        </h3>
      </div>
      <div id="_bar" className="bg-white h-3 w-full flex rounded overflow-hidden gap-[2px]">
      <span
        id="red"
        className="bg-[#ffa9a9] h-full rounded-md transition-all duration-1000 ease-in-out"
        style={{ width: `${redWidth}%` }}
      ></span>
      <span
        id="yellow"
        className="bg-[#ffcd90] h-full rounded-md transition-all duration-1000 ease-in-out"
        style={{ width: `${yellowWidth}%` }}
      ></span>
      <span
        id="green"
        className="bg-[#91edb6] h-full rounded-md transition-all duration-1000 ease-in-out"
        style={{ width: `${greenWidth}%` }}
      ></span>
    </div>
      <div id="_bottom" className="flex items-center gap-[22px]">
        <div id="_first" className="flex flex-col gap-[6px]">
          <p className="text-[12.3px] text-[#BEBEC1] leading-[14.89px] ">
            Negative
          </p>
          <p className="text-[14.1px] leading-[17.06px] text-[#818285] font-semibold">
          {redValue}
          </p>
        </div>
        <div id="_second" className="flex flex-col gap-[6px]">
          <p className="text-[12.3px] text-[#BEBEC1] leading-[14.89px] ">
            Negative
          </p>
          <p className="text-[14.1px] leading-[17.06px] text-[#818285] font-semibold">
            {yellowValue}
          </p>
        </div>
        <div id="_third" className="flex flex-col gap-[6px]">
          <p className="text-[12.3px] text-[#BEBEC1] leading-[14.89px] ">
          {greenValue}
          </p>
          <p className="text-[14.1px] leading-[17.06px] text-[#818285] font-semibold">
            12
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightMostlyPositive;
