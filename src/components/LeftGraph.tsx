import ComparisonGraph from "./ComparisonGraph";

const LeftGraph = () => {
  return (
    <div>
      <div id="_top-heading" className="flex items-center justify-between">
        <p className="text-[#7C7D81] text-[18.2px] leading-[22.03px] font-semibold">
          Comparison
        </p>
        <aside className="relative bg-white">
          <select className=" py-1.5 pl-3.5 pr-9 appearance-none hover:cursor-pointer bg-bg-primary border-0  border-border rounded-md text-text  focus:appearance-none focus:outline-none  text-[#8C8D91] ">
            <option>This Months</option>
            <option>Last Month</option>
          </select>
          <svg
            className="absolute right-3.5 top-3 hover:cursor-pointer pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
              fill="#4D4D4D"
            />
          </svg>
        </aside>
      </div>
      <ComparisonGraph />
    </div>
  );
};

export default LeftGraph;
