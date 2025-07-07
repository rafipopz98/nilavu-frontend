import { Search } from "lucide-react";
import CustomTable from "../../components/basic/CustomTable";
import { useMemo, useState } from "react";
import FilterButton from "../../components/filters/FilterButton";
import AppliedJobsFilter from "../../components/filters/AppliedJobsFilter";

const headers = {
  name: "Job Title",
  company: "Company",
  location: "Location",
  status: "Status",
};

const rows = [
  {
    name: "Frontend Developer",
    company: "Acme Corp",
    location: "Remote",
    status: "Open",
  },
  {
    name: "Backend Engineer",
    company: "Beta Inc",
    location: "New York",
    status: "Closed",
  },
];
const AppliedJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownQuery, setQuery] = useState({});

  const handleSearch = (a: any) => {
    setQuery(a);
  };

  const isFilterActive = Object.values(dropdownQuery).length > 0;

  // Filtered rows by search
  const filteredRows = useMemo(() => {
    if (!searchTerm.trim()) return rows;
    const term = searchTerm.toLowerCase();
    return rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(term)
      )
    );
  }, [searchTerm]);

  return (
    <div className="p-4">
      <div className="text-center my-6 py-2">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Applied Jobs
        </h1>
        <p className="text-muted-foreground mb-4">
          View and manage your applied jobs
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex items-center gap-2 mb-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <FilterButton
          isFilterActive={isFilterActive}
          content={({ close }: any) => (
            <AppliedJobsFilter
              defaultData={dropdownQuery}
              onClose={close}
              onSubmit={handleSearch}
              type={"invoices"}
            />
          )}
        />
      </div>

      <CustomTable
        headers={headers}
        rows={filteredRows}
        sortableKeys={["name", "status"]}
      />
    </div>
  );
};

export default AppliedJobs;
