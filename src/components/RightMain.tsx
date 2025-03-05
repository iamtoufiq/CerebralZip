import RightCustomerByDevice from "./RightCustomerByDevice"
import RightMostlyPositive from "./RightMostlyPositive"
import RightSemiPie from "./RightSemiPie"

const RightMain = () => {

  return (
    // bg-bg-primary flex lg:flex-col justify-between gap-2 flex-wrap
    <div className="w-full bg-bg-primary flex flex-col justify-between gap-2 flex-wrap" >
        <RightSemiPie/>
        <RightCustomerByDevice/>
        <RightMostlyPositive/>
    </div>
  )
}

export default RightMain