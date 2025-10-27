import {
  Users,
  Briefcase,
  TrendingUp,
  Award,
  ArrowUpRight,
} from "lucide-react";

const CompanyInsights = () => {
  const insights = [
    {
      id: 1,
      title: "Seats",
      value: "5",
      subtitle: "Total Seats",
      icon: TrendingUp,
      iconColor: "text-green-600",
    },
    {
      id: 2,
      title: "Team Strength",
      value: "47",
      subtitle: "Active Members",
      icon: Users,
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      title: "Active Opportunities",
      value: "12",
      subtitle: "Live Job Postings",
      icon: Briefcase,
      iconColor: "text-purple-600",
    },
    {
      id: 4,
      title: "Talent Pipeline",
      value: "234",
      subtitle: "Applications Received",
      icon: Award,
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Company Insights
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight) => {
          const Icon = insight.icon;
          return (
            <div
              key={insight.id}
              className={`group relative rounded-xl p-5 transition-all duration-200 cursor-pointer border shadow-md hover:border-gray-200 hover:shadow-lg`}
            >
              {/* Top row — Icon and Arrow */}
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg ${insight.iconColor}`}>
                  <Icon size={20} strokeWidth={2.5} />
                </div>

                {/* Hidden arrow that appears on hover */}
                <ArrowUpRight
                  size={18}
                  className="text-gray-400 opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200"
                />
              </div>

              {/* Content */}
              <div className="space-y-1">
                <h4 className="text-2xl font-bold text-gray-900">
                  {insight.value}
                </h4>
                <p className="text-sm font-medium text-gray-700">
                  {insight.title}
                </p>
                <p className="text-xs text-gray-500">{insight.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyInsights;
