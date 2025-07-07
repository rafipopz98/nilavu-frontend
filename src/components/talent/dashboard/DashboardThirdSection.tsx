import AttendanceTrackingSection from "./AttendanceTrackingSection";
import SalaryTracking from "./SalaryTracking";

const DashboardThirdSection = () => {
  return (
    <div className="my-6 font-geist">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <AttendanceTrackingSection />
        <SalaryTracking />
      </div>
    </div>
  );
};

export default DashboardThirdSection;
