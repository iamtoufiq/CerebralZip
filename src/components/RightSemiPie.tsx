import useFetchData from "../hooks/useFetchData";
import SemiCircularChart from "./SemiCircularChart";

interface ApiResponse {
  score?: number;
  title?: string;
  message?: string;
}

const RightSemiPie = () => {
  const { data, loading, error } = useFetchData<ApiResponse>(
    "sample_assignment_api_3/"
  );

  return (
    <div className="flex flex-col gap-9 p-7 rounded-2xl bg-white w-full flex-1 overflow-hidden">
      {loading ? (
        <div className="animate-pulse flex flex-col gap-5">
          <div className="h-32 w-32 rounded-full bg-gray-300 mx-auto"></div>
          <div className="h-5 w-2/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-300 rounded"></div>
        </div>
      ) : (
        <>
          <SemiCircularChart score={data?.score || 0} />
          <div id="_data" className="flex flex-col gap-[10px]">
            <h3 className="text-[18.2px] leading-[22.03px] text-[#78797D] font-semibold">
              {data?.title || ""}
            </h3>
            <p className="text-[#B8B9BB] text-[13.7px] leading-[21.11px] font-semibold">
              {data?.message || ""}
            </p>
          </div>
          <button className="max-w-fit cursor-pointer pl-[15px] pt-[13px] pb-3 text-[13.8px] leading-[16.7px] font-semibold text-[#939497]">
            Improve your score
          </button>
        </>
      )}
    </div>
  );
};

export default RightSemiPie;
