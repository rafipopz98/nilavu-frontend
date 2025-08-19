import EmployerDashboardTodo from "../../components/employer/EmployerDashboardTodo";

const EmployerDashboard = () => {
  return (
    <div className="mt-6 font-geist w-full">
      <div className="mx-3 space-y-6">
        <EmployerDashboardTodo />

        <h3 className="text-lg font-semibold text-foreground">
          Company Insights
        </h3>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="flex flex-col gap-2 p-4 bg-secondary rounded-lg hover:bg-secondary-hover transition">
            <span className="text-sm font-medium text-primary">
              Team Overview
            </span>
            5 Hires in the last 30 days
          </div>
          <div className="flex flex-col gap-2 p-4 bg-secondary rounded-lg hover:bg-secondary-hover transition">
            <span className="text-sm font-medium text-primary">
              Company Reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
