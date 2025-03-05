import { productsData } from "../constants/data";
import TableCardItem from "./TableCardItem";

const tableHeader = [
  {
    id: "1",
    tittle: "Product",
  },
  {
    id: "2",
    tittle: "Sold Amount",
  },
  {
    id: "3",
    tittle: "Unit Price",
  },
  {
    id: "4",
    tittle: "Revenue",
  },
  {
    id: "5",
    tittle: "Rating",
  },
];
const LeftTopProducts = () => {
  return (
    <div className="flex flex-col gap-1 lg:gap-2 mb-5 lg:mb-7">
      <div id="_top-heading" className="flex items-center justify-between">
        <p className="text-[#7C7D81] text-[18.2px] leading-[22.03px] font-semibold">
        Top Products
        </p>
        <aside className="relative bg-white">
          <select className=" py-1.5 pl-3.5 pr-9 appearance-none hover:cursor-pointer bg-bg-primary border border-[#CED0D7] rounded-md text-text  focus:appearance-none focus:outline-none  text-[#8C8D91] ">
            <option>Full results</option>
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
      {/* ========== table========= */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="border-b border-gray-300">
            <tr className="">
              {tableHeader.map((tittle) => {
                return (
                  <th key={tittle.id} className="text-[12.7px] leading-[15.37px] text-[#AFB0B3] font-semibold py-3 px-3  text-sm whitespace-nowrap text-left">
                    {tittle.tittle}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {productsData.map((product, index) => (
              <TableCardItem key={index} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeftTopProducts;
