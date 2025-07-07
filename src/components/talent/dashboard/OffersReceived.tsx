import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TALENT_ROUTES } from "../../../lib/routes/TalentRoutes";

const data = [
  {
    job_title: "Software Engineer",
    offer_status: "Pending",
    company_name: "Google",
    salary: "$100,000",
  },
  {
    job_title: "Frontend Developer",
    offer_status: "Accepted",
    company_name: "Meta",
    salary: "$120,000",
  },
  {
    job_title: "Backend Engineer",
    offer_status: "Rejected",
    company_name: "Amazon",
    salary: "$110,000",
  },
  {
    job_title: "Fullstack Developer",
    offer_status: "Pending",
    company_name: "Netflix",
    salary: "$130,000",
  },
  {
    job_title: "Mobile Developer",
    offer_status: "Pending",
    company_name: "Apple",
    salary: "$115,000",
  },
];

const statusColors: any = {
  Pending: "bg-yellow-100 text-yellow-800",
  Accepted: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
};

const OffersReceived = () => {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-border backdrop-blur-sm bg-background/70 shadow-sm hover:shadow-md transition overflow-hidden font-geist">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="text-base font-semibold text-foreground">Job Offers</h3>
        <Link
          to={TALENT_ROUTES.JOB_OFFERS}
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
            to={TALENT_ROUTES.JOB_OFFERS}
            key={index}
            className="group flex items-center justify-between gap-4 p-4 hover:bg-muted transition rounded"
          >
            <div className="flex flex-col">
              <p className="font-medium text-foreground">{item?.job_title}</p>
              <p className="text-sm text-muted-foreground">
                {item?.company_name}
              </p>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-sm font-semibold text-foreground">
                {item?.salary}
              </p>
              <span
                className={`mt-1 px-2 py-0.5 text-xs rounded-full ${
                  statusColors[item?.offer_status] ||
                  "bg-gray-100 text-gray-800"
                }`}
              >
                {item?.offer_status}
              </span>
            </div>

            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OffersReceived;
