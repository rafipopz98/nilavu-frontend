import { UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinksData = [
  {
    icon: UserPlus,
    label: "Add Hire",
    link: "/employer/add-hire",
  },
  {
    icon: UserPlus,
    label: "Manage Hires",
    link: "/employer/manage-hires",
  },
  {
    icon: UserPlus,
    label: "Post Job",
    link: "/employer/post-job",
  },
  {
    icon: UserPlus,
    label: "View Applications",
    link: "/employer/view-applications",
  },
];

const QuickLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      {quickLinksData.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className="flex flex-col gap-2 p-4 bg-secondary rounded-lg hover:bg-secondary-hover transition"
        >
          <item.icon />
          <span className="text-sm font-medium text-primary">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default QuickLinks;
