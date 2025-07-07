import { Bookmark, Clock } from "lucide-react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    logo: string;
    applicants: number;
    salary: string;
    postedDays: number;
    description: string;
    jobType: string[];
    isBookmarked: boolean;
  };
  onBookmark: (jobId: string) => void;
}

const FindJobsCard = ({ job, onBookmark }: JobCardProps) => {
  const getJobTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Full-Time":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Remote":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "Expert":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      case "Part-Time":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardContent className="px-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-xl font-bold">
              {job.logo}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-sm text-muted-foreground">
                {job.company} • {job.applicants} Applicants
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onBookmark(job.id)}
            className={`${
              job.isBookmarked ? "text-yellow-500" : "text-muted-foreground"
            }`}
          >
            <Bookmark
              className="w-4 h-4"
              fill={job.isBookmarked ? "currentColor" : "none"}
            />
          </Button>
        </div>

        <div className="flex gap-2 mb-4">
          {job.jobType.map((type) => (
            <Badge
              key={type}
              variant="secondary"
              className={getJobTypeBadgeColor(type)}
            >
              {type}
            </Badge>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {job.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="font-semibold text-lg">{job.salary}</div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            Posted {job.postedDays} days ago
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FindJobsCard;
