import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";
import { Separator } from "../../ui/separator";
import { Slider } from "../../ui/slider";

interface FilterSidebarProps {
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

export const FindJobFilterContent = ({
  filters,
  onFilterChange,
  onReset,
}: FilterSidebarProps) => {
  const handleCheckboxChange = (
    filterType: string,
    value: string,
    checked: boolean
  ) => {
    const currentValues = filters[
      filterType as keyof typeof filters
    ] as string[];
    if (checked) {
      onFilterChange(filterType, [...currentValues, value]);
    } else {
      onFilterChange(
        filterType,
        currentValues.filter((v) => v !== value)
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filter</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="text-green-600 hover:text-green-700"
        >
          Reset
        </Button>
      </div>

      {/* Sort By */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Sort By</Label>
        <div className="gap-4 flex items-center">
          {["Recently", "Top Salary"].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={option}
                checked={filters.sortBy.includes(option)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("sortBy", option, checked as boolean)
                }
              />
              <Label htmlFor={option} className="text-sm text-muted-foreground">
                {option}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Salary Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Salary Range</Label>
        <div className="px-2">
          <Slider
            value={filters.salaryRange}
            onValueChange={(value) => onFilterChange("salaryRange", value)}
            max={5000}
            min={0}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>${filters.salaryRange[0]}/month</span>
            <span>${filters.salaryRange[1]}/month</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Job Type */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Job Type</Label>
        <div className="gap-4 flex items-center">
          {["Full-Time", "Part-Time"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={type}
                checked={filters.jobType.includes(type)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("jobType", type, checked as boolean)
                }
              />
              <Label htmlFor={type} className="text-sm text-muted-foreground">
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Experience Level */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Experience Level</Label>
        <div className="grid grid-cols-2 gap-4">
          {["Fresher", "Beginner", "Intermediate", "Expert"].map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox
                id={level}
                checked={filters.experienceLevel.includes(level)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(
                    "experienceLevel",
                    level,
                    checked as boolean
                  )
                }
              />
              <Label htmlFor={level} className="text-sm text-muted-foreground">
                {level}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FilterSidebar = ({
  filters,
  onFilterChange,
  onReset,
}: FilterSidebarProps) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <Card className="w-80 h-fit hidden lg:block">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <FindJobFilterContent
            filters={filters}
            onFilterChange={onFilterChange}
            onReset={onReset}
          />
        </CardContent>
      </Card>
    </>
  );
};
