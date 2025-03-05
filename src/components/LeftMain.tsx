import LeftGraph from "./LeftGraph";
import LeftHeader from "./LeftHeader";
import LeftPrice from "./LeftPrice";
import LeftTopProducts from "./LeftTopProducts";

const LeftMain = () => {
  return (
    <div className="w-full bg-white gap-3 flex flex-col rounded-2xl px-10 pt-10 overflow-hidden shadow-sm"  >
      <LeftHeader />
      <LeftPrice/>
      {/* // endpont => /sample_assignment_api_1/ */}
      <LeftGraph/>
      <LeftTopProducts/>
    </div>
  );
};

export default LeftMain;
