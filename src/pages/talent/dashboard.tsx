import DashboardToDo from "../../components/basic/DashboardToDo";
import DashboardSecondSection from "../../components/talent/dashboard/DashboardSecondSection";
import DashboardThirdSection from "../../components/talent/dashboard/DashboardThirdSection";

const TalentDashboard = () => {
  return (
    <div className="">
      <div className="mx-auto space-y-6">
        {/* <DashboardToDo todoList={realData} loading={isLoading} /> */}
        <DashboardToDo />
        <DashboardSecondSection />
        <DashboardThirdSection />
      </div>
    </div>
  );
};

export default TalentDashboard;
