import { Hourglass, LucideCalendarHeart } from "lucide-react";

const data = [
  {
    label: "Hours",
    value: 0,
    status: "error",
    details: "Today's Attendance stats",
    icon: LucideCalendarHeart,
    color: "text-green-600",
    title: "today",
    hours: 0,
  },
  {
    label: "Hours",
    value: 0,
    status: "warning",
    details: "Monthly Attendance stats",
    icon: Hourglass,
    color: "text-slate-600",
    title: "month",
    hours: 0,
  },
];
const AttendanceTrackingSection = () => {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-border backdrop-blur-sm bg-background/70 shadow-sm hover:shadow-md transition overflow-hidden font-geist pb-2">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="text-sm font-semibold text-foreground">
          Track Attendance and Work Hours
        </h3>
      </div>
      {/* cards */}
      <div className="grid h-40 grid-cols-3 gap-3 overflow-scroll p-5 pb-0 md:h-40 lg:h-32">
        {data.map((stat, index) => (
          <div>
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl border border-border p-2"
            >
              <div className="flex flex-col items-center gap-1">
                <div>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="flex flex-col items-center justify-center gap-0 text-center">
                  <h2 className="mb-0 mt-1 text-sm font-medium text-muted-foreground">
                    {stat.hours}
                  </h2>
                  <h3 className="mb-0 mt-0 text-xs font-light text-muted-foreground">
                    {stat.label}
                  </h3>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-2 w-full text-center text-[10px] font-normal text-foreground">
              {stat.details}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceTrackingSection;
