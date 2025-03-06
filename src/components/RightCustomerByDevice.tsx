import CustomersByDeviceChart from "./CustomersByDeviceChart";
const RightCustomerByDevice = () => {
  return (
    <div className="flex flex-col gap-5 py-7 px-[30px] rounded-2xl bg-white w-full lg:min-h-[348px]">
      <h3 className="text-[#7B7C80] text-[17.8px] leading-[21.54px] font-semibold">
        Customers by device
      </h3>
      <CustomersByDeviceChart />
    </div>
  );
};

export default RightCustomerByDevice;
