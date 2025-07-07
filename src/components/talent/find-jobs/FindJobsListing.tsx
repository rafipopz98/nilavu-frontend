import { Filter } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import FindJobsCard from "./FindJobsCard";
import { FindJobFilterContent } from "./FindJobFilter";

interface JobListProps {
  jobs: any[];
  totalJobs: number;
  sortBy: string;
  onSortChange: (value: string) => void;
  onBookmark: (jobId: string) => void;
  filters: {
    sortBy: string[];
    salaryRange: number[];
    jobType: string[];
    workLocation: string[];
    experienceLevel: string[];
  };
  onFilterChange: (filterType: string, value: any) => void;
  onReset: () => void;
}

const FindJobsListing = ({
  jobs,
  totalJobs,
  sortBy,
  onSortChange,
  onBookmark,
  filters,
  onFilterChange,
  onReset,
}: JobListProps) => {
  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6">
        {/* Total jobs */}
        <div>
          <span className="text-muted-foreground">Showing </span>
          <span className="font-semibold text-green-600">
            {totalJobs.toLocaleString()}
          </span>
          <span className="text-muted-foreground"> available jobs</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          {/* Filter Button for mobile/tablet */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 overflow-y-auto p-4">
                <SheetHeader>
                  <SheetTitle>Filter Jobs</SheetTitle>
                </SheetHeader>
                <FindJobFilterContent
                  filters={filters}
                  onFilterChange={onFilterChange}
                  onReset={onReset}
                />
              </SheetContent>
            </Sheet>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              Sort By:
            </span>
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger className="w-[80%] sm:w-32">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="salary-high">Salary High</SelectItem>
                <SelectItem value="salary-low">Salary Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <FindJobsCard key={job.id} job={job} onBookmark={onBookmark} />
        ))}
      </div>
    </div>
  );
};

export default FindJobsListing;
