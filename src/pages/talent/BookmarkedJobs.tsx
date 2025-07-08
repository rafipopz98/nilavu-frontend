import { useState } from "react";
import BookmarkSearchAndFilter from "../../components/talent/bookmarked-jobs/BookmarkSearchAndFilter";
import BookmarkedJobsCard from "../../components/talent/bookmarked-jobs/BookmarkedJobsCard";

const data = [
  {
    id: "1",
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    job_type: "Full Time",
    bookmarked: true,
    company_name: "Google",
    job_title: "Software Engineer",
    salary: "$100,000",
    shift: "US Shift",
    workHours: "40hr/week",
  },
  {
    id: "2",
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    job_type: "Full Time",
    bookmarked: true,
    company_name: "Google",
    job_title: "Software Engineer",
    salary: "$100,000",
    shift: "US Shift",
    workHours: "40hr/week",
  },
  {
    id: "3",
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    job_type: "Part Time",
    bookmarked: true,
    company_name: "Google",
    job_title: "Software Engineer",
    salary: "$200,000",
    shift: "UK Shift",
    workHours: "20hr/week",
  },
  {
    id: "4",
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    job_type: "Full Time",
    bookmarked: true,
    company_name: "Google",
    job_title: "Software Engineer",
    salary: "$130,000",
    shift: "Poland Shift",
    workHours: "40hr/week",
  },
  {
    id: "5",
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    job_type: "Full Time",
    bookmarked: true,
    company_name: "Google",
    job_title: "Software Engineer",
    salary: "$140,000",
    shift: "UK Shift",
    workHours: "40hr/week",
  },
  {
    id: "6",
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    job_type: "Part Time",
    bookmarked: true,
    company_name: "Google",
    job_title: "Software Engineer",
    salary: "$110,000",
    shift: "US Shift",
    workHours: "20hr/week",
  },
];

const BookmarkedJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [jobs, setJobs] = useState(data);

  const [filters, setFilters] = useState({
    sortBy: [],
    salaryRange: [0, 5000],
    jobType: ["Full-Time"],
    workLocation: [],
    experienceLevel: [],
  });

  const handleReset = () => {
    setFilters({
      sortBy: [],
      salaryRange: [50, 120],
      jobType: [],
      workLocation: [],
      experienceLevel: [],
    });
  };
  const handleFilterChange = (filterType: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleBookmark = (jobId: string) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === jobId ? { ...job, bookmarked: !job.bookmarked } : job
      )
    );
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm, "in", location);
  };

  return (
    <div className="flex flex-col mt-4 gap-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Bookmarked Jobs
        </h1>
        <p className="text-muted-foreground">
          View and manage your bookmarked jobs
        </p>
      </div>
      {/* search and filters */}
      <BookmarkSearchAndFilter
        searchTerm={searchTerm}
        location={location}
        onSearchChange={setSearchTerm}
        onLocationChange={setLocation}
        onSearch={handleSearch}
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {jobs.map((job, index) => (
          <BookmarkedJobsCard
            key={index}
            jobs={job}
            onBookmark={handleBookmark}
          />
        ))}
      </div>
    </div>
  );
};

export default BookmarkedJobs;
