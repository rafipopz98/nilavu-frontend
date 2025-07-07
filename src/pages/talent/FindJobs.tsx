import { useState } from "react";
import FindJobsSearchBar from "../../components/talent/find-jobs/FindJobsSearchBar";
import FindJobsListing from "../../components/talent/find-jobs/FindJobsListing";
import { FilterSidebar } from "../../components/talent/find-jobs/FindJobFilter";

const jobsData = [
  {
    id: "1",
    title: "Sr. Product Designer",
    company: "Google",
    logo: "🇬",
    applicants: 12,
    salary: "$102k/m",
    postedDays: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    jobType: ["Full-Time", "Remote", "Expert"],
    isBookmarked: false,
  },
  {
    id: "2",
    title: "Interaction Designer",
    company: "Apple",
    logo: "🍎",
    applicants: 26,
    salary: "$100k/m",
    postedDays: 8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    jobType: ["Full-Time", "Remote", "Expert"],
    isBookmarked: true,
  },
  {
    id: "3",
    title: "Design System Manager",
    company: "Spotify",
    logo: "🎵",
    applicants: 56,
    salary: "$232k/m",
    postedDays: 7,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    jobType: ["Full-Time", "Remote", "Expert"],
    isBookmarked: false,
  },
  {
    id: "4",
    title: "Product Designer",
    company: "Reddit",
    logo: "🔴",
    applicants: 134,
    salary: "$132k/m",
    postedDays: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    jobType: ["Full-Time", "Remote", "Expert"],
    isBookmarked: true,
  },
  {
    id: "5",
    title: "UI/UX Designer",
    company: "Discord",
    logo: "💬",
    applicants: 14,
    salary: "$90k/m",
    postedDays: 10,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    jobType: ["Full-Time", "Remote", "Expert"],
    isBookmarked: true,
  },
  {
    id: "6",
    title: "UX Writer",
    company: "Pinterest",
    logo: "📌",
    applicants: 81,
    salary: "$110k/m",
    postedDays: 2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    jobType: ["Full-Time", "Remote", "Expert"],
    isBookmarked: true,
  },
  {
    id: "7",
    title: "UX Researcher",
    company: "Facebook",
    logo: "📘",
    applicants: 45,
    salary: "$95k/m",
    postedDays: 5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    jobType: ["Full-Time", "Remote", "Expert"],
    isBookmarked: false,
  },
  {
    id: "8",
    title: "Growth Product Lead",
    company: "Figma",
    logo: "🎨",
    applicants: 23,
    salary: "$150k/m",
    postedDays: 3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    jobType: ["Full-Time", "Remote", "Expert"],
    isBookmarked: false,
  },
  {
    id: "9",
    title: "Sr. Product Analyst",
    company: "LinkedIn",
    logo: "💼",
    applicants: 67,
    salary: "$125k/m",
    postedDays: 6,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    jobType: ["Full-Time", "Remote", "Expert"],
    isBookmarked: true,
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [jobs, setJobs] = useState(jobsData);

  const [filters, setFilters] = useState({
    sortBy: [],
    salaryRange: [0, 5000],
    jobType: ["Full-Time"],
    workLocation: [],
    experienceLevel: [],
  });

  const handleFilterChange = (filterType: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      sortBy: [],
      salaryRange: [50, 120],
      jobType: [],
      workLocation: [],
      experienceLevel: [],
    });
  };

  const handleSearch = () => {
    // Implement search logic here
    console.log("Searching for:", searchTerm, "in", location);
  };

  const handleBookmark = (jobId: string) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === jobId ? { ...job, isBookmarked: !job.isBookmarked } : job
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto py-8">
        <div className="flex lg:gap-8">
          {/* Sidebar */}
          <div className="flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleReset}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <FindJobsSearchBar
              searchTerm={searchTerm}
              location={location}
              onSearchChange={setSearchTerm}
              onLocationChange={setLocation}
              onSearch={handleSearch}
            />

            <FindJobsListing
              jobs={jobs}
              totalJobs={1382}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onBookmark={handleBookmark}
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleReset}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
