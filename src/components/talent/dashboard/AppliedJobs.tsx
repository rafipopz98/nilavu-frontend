import { Link } from "react-router-dom";
import { TALENT_ROUTES } from "../../../lib/routes/TalentRoutes";
import { ChevronRight } from "lucide-react";

const data = [
  {
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    job_title: "Software Engineer",
    company_name: "Google",
    salary: "$100,000",
  },
  {
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    job_title: "Frontend Developer",
    company_name: "Meta",
    salary: "$120,000",
  },
  {
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    job_title: "Backend Engineer",
    company_name: "Amazon",
    salary: "$110,000",
  },
  {
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    job_title: "Mobile Developer",
    company_name: "Apple",
    salary: "$115,000",
  },
  {
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    job_title: "Fullstack Developer",
    company_name: "Netflix",
    salary: "$130,000",
  },
];

const AppliedJobs = () => {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-border backdrop-blur-sm bg-background/70 shadow-sm hover:shadow-md transition overflow-hidden font-geist">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="text-base font-semibold text-foreground">
          Applied Jobs
        </h3>
        <Link
          to={TALENT_ROUTES.APPLIED_JOBS}
          className="flex items-center text-sm font-medium text-primary hover:underline"
        >
          View All
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      {/* Body */}
      <div className="h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent">
        {data?.map((item, index) => (
          <Link
            to={TALENT_ROUTES.APPLIED_JOBS}
            key={index}
            className="group flex items-center justify-between gap-4 p-4 hover:bg-muted transition rounded"
          >
            <div className="flex items-center gap-3">
              <img
                src={item?.company_logo}
                alt={item?.company_name}
                className="h-10 w-10 rounded-full border border-border object-cover shadow-sm flex-shrink-0"
              />
              <div className="flex flex-col">
                <p className="text-sm font-medium text-foreground">
                  {item?.job_title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {item?.company_name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-foreground">
                {item?.salary}
              </p>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
