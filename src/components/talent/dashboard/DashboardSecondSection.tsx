import CurrentEmployer from "./CurrentEmployer";
import AppliedJobs from "./AppliedJobs";
import OffersReceived from "./OffersReceived";

const DashboardSecondSection = () => {
  return (
    <div className="mt-6 font-geist">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3">
        <CurrentEmployer />
        <AppliedJobs />
        <OffersReceived />
      </div>
    </div>
  );
};

export default DashboardSecondSection;
