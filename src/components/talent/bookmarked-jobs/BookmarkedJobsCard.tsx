import { Bookmark, Briefcase, Calendar, Clock } from "lucide-react";
import { Button } from "../../ui/button";

export type BookmarkedJobsCardProps = {
  jobs: {
    id: string;
    company_logo: string;
    job_type: string;
    bookmarked: boolean;
    company_name: string;
    job_title: string;
    salary: string;
    shift: string;
    workHours: string;
  };
  onBookmark: (jobId: string) => void;
};

const BookmarkedJobsCard = ({ jobs, onBookmark }: BookmarkedJobsCardProps) => {
  return (
    <div className="w-full rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-200 p-6">
      <div className="flex items-start justify-between mb-6">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="">
            <img
              src={jobs.company_logo}
              alt=""
              className="w-16 h-16 rounded-xl flex items-center justify-center"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-lg font-medium text-sm flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              {jobs.job_type}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onBookmark(jobs.id)}
              className={`${
                jobs.bookmarked ? "text-yellow-500" : "text-muted-foreground"
              }`}
            >
              <Bookmark
                className="w-4 h-4"
                fill={jobs.bookmarked ? "currentColor" : "none"}
              />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-1">
            {jobs.company_name}
          </h3>
          <h4 className="text-foreground font-medium">{jobs.job_title}</h4>
        </div>

        <div className="text-2xl font-bold text-foreground mb-4">
          {jobs.salary}
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{jobs.workHours}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{jobs.shift}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkedJobsCard;
