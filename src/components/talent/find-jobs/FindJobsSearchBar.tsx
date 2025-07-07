import { MapPin, Search } from "lucide-react";
import { Card } from "../../ui/card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

interface SearchBarProps {
  searchTerm: string;
  location: string;
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onSearch: () => void;
}

const FindJobsSearchBar = ({
  searchTerm,
  location,
  onSearchChange,
  onLocationChange,
  onSearch,
}: SearchBarProps) => {
  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Find your Dream job here!
        </h1>
        <p className="text-muted-foreground">
          Explore our newest job opportunities to discover and apply for the top
          positions available today!
        </p>
      </div>

      <Card className="p-4">
        {/* Make flex-col on small screens, flex-row on md+ */}
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="relative w-full md:flex-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search Job title or keyword here"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="relative w-full md:flex-1">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search Shift"
              value={location}
              onChange={(e) => onLocationChange(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            onClick={onSearch}
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8"
          >
            Search
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FindJobsSearchBar;
