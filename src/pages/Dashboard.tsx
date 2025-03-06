import LeftMain from "../components/LeftMain"
import RightMain from "../components/RightMain"
import DefaultLayout from "../Layouts/DefaultLayout"

const Dashboard = () => {

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1  xl:grid-cols-[72%_27%]   gap-2  bg-bg-primary px-0 pb-11 pt-3 m-5 lg:m-0 pr-0 lg:pr-7">
        <LeftMain />
        <RightMain />
      </div>
    </DefaultLayout>
  )
}

export default Dashboard