import { CheckCheckIcon, Coins, DollarSign, File } from "lucide-react";

const data = [
  {
    label: "Monthly Salary",
    value: 0,
    status: "error",
    details: 0,
    width: "w-full md:w-full lg:w-[21%]",
    icon: DollarSign,
    color: "text-vs-blue",
    title: "salary",
  },
  {
    label: "Active Invoice",
    value: 0,
    status: "warning",
    details: 0,
    width: "w-full md:w-full lg:w-[21%]",
    icon: File,
    color: "text-vs-blue",
    title: "invoice",
  },
  {
    label: "Paid Invoice",
    value: 0,
    status: "success",
    details: 0,
    width: "w-full md:w-full lg:w-[21%]",
    icon: CheckCheckIcon,
    color: "text-vs-blue",
    title: "paid",
  },
  {
    label: "Earned Since 2022",
    value: 0,
    status: "success",
    width: "w-full md:w-full lg:w-[37%]",
    details: "Lifetime Earnings on VirtualStaff.ph",
    icon: Coins,
    color: "text-slate-700",
    title: "earnings",
  },
];

const SalaryTracking = () => {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-border backdrop-blur-sm bg-background/70 shadow-sm hover:shadow-md transition overflow-hidden font-geist">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="text-sm font-semibold text-foreground">
          Salary Tracking
        </h3>
      </div>
      {/* cards */}
      <div className="flex h-32 flex-col gap-4 overflow-scroll px-5 pb-5 md:flex-col lg:mt-2.5 lg:flex-row lg:gap-0 lg:pb-0">
        {data.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center ${stat.width}`}
          >
            <div
              key={index}
              className={`flex flex-col items-center justify-center rounded-xl ${
                index === data.length - 1
                  ? "w-full rounded-xl border border-border px-7 py-2"
                  : "w-full rounded-xl border border-border px-7 py-2 lg:border-none lg:p-0"
              } bg-background/20`}
            >
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border border-border`}
                >
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div className="flex flex-col items-center justify-center gap-0 text-center">
                  <h2 className="mb-0 mt-1 text-sm font-medium text-muted-foreground">
                    {stat.value}
                  </h2>
                  <h3 className="mb-0 mt-0 text-[11px] font-light text-muted-foreground">
                    {stat.label}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryTracking;
