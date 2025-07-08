import { Filter, MapPin, Search } from "lucide-react";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { FindJobFilterContent } from "../find-jobs/FindJobFilter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

interface SearchBarProps {
  searchTerm: string;
  location: string;
  sortBy: string;
  onSortChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onSearch: () => void;
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

const BookmarkSearchAndFilter = ({
  searchTerm,
  location,
  onSearchChange,
  onLocationChange,
  onSearch,
  filters,
  onFilterChange,
  onReset,
  sortBy,
  onSortChange,
}: SearchBarProps) => {
  return (
    <div className="space-y-4">
      {/* Main Search Bar */}
      <Card className="p-6 shadow-md border border-muted bg-background">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="relative col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search job title or keywords"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 h-11"
            />
          </div>
          <div className="relative col-span-2">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Location"
              value={location}
              onChange={(e) => onLocationChange(e.target.value)}
              className="pl-10 h-11"
            />
          </div>
          <Button
            onClick={onSearch}
            className="h-11 w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold"
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </Card>

      {/* Filters and Sorting */}
      <div className="flex flex-col sm:flex-row justify-end gap-3">
        {/* Mobile Filter Button */}
        <div className="flex sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Filter className="w-4 h-4 mr-2" />
                Filters
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

        {/* Sort By Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            Sort By:
          </span>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-40">
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

        {/* Desktop Filter Sidebar Trigger */}
        <div className="hidden sm:flex">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filters
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
      </div>
    </div>
  );
};

export default BookmarkSearchAndFilter;
