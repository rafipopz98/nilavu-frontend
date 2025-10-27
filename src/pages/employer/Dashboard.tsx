import CompanyInsight from "../../components/employer/CompanyInsights";
import EmployerDashboardTodo from "../../components/employer/EmployerDashboardTodo";
import PaymentInsight from "../../components/employer/PaymentInsight";

const EmployerDashboard = () => {
  return (
    <div className="mt-6 font-geist w-full">
      <div className="mx-3 mb-6 space-y-6">
        <EmployerDashboardTodo />
        <CompanyInsight />
        <PaymentInsight />
      </div>
    </div>
  );
};

export default EmployerDashboard;
