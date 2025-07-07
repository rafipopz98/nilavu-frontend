import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { TALENT_ROUTES } from "../../../lib/routes/TalentRoutes";

const data = {
  company_logo:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
  job_title: "Software Engineer",
  company_name: "Google",
  job_type: "Full Time",
  department: "Engineering",
  location: "Mountain View, CA",
  joining_date: "Jan 23, 2025",
  employment_status: "Active",
  description:
    "Working on scalable web applications and contributing to cloud infrastructure solutions.",
};

const CurrentEmployer = () => {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-border backdrop-blur-sm bg-background/70 shadow-sm hover:shadow-md transition overflow-hidden font-geist">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="text-sm font-semibold text-foreground">
          Active Employer
        </h3>
        <Link
          to={TALENT_ROUTES.EMPLOYER_HISTORY}
          className="flex items-center text-sm font-medium text-primary hover:underline"
        >
          View All
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-4 flex-1">
        {/* Logo and Company Info */}
        <div className="flex items-center gap-3">
          <img
            src={data.company_logo}
            alt={data.company_name}
            className="h-12 w-12 rounded-full border border-border object-cover shadow flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-semibold text-foreground truncate">
              {data.company_name}
            </h2>
            <p className="text-xs text-muted-foreground truncate">
              {data.location}
            </p>
          </div>
        </div>

        {/* Job Content */}
        <div className="flex flex-col space-y-3 flex-1">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-foreground">
              {data.job_title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {data.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-foreground">
              {data.job_type}
            </span>
            <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-foreground">
              {data.department}
            </span>
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-medium">
              {data.employment_status}
            </span>
          </div>

          {/* Joining Date */}
          <div className="text-xs text-muted-foreground">
            Joined {data.joining_date}
          </div>

          {/* Action Button */}
          <div className="mt-auto pt-2">
            <Link to="#">
              <button className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-secondary transition">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentEmployer;
