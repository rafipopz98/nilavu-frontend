import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import moment from "moment";

const WeekNavigator = () => {
  const today = moment();
  const [currentDate, setCurrentDate] = useState(moment());

  const startOfCurrentWeek = currentDate.clone().startOf("isoWeek");
  const endOfCurrentWeek = currentDate.clone().endOf("isoWeek");

  const handlePreviousWeek = () => {
    setCurrentDate((prev) => prev.clone().subtract(1, "week"));
  };

  const handleNextWeek = () => {
    setCurrentDate((prev) => prev.clone().add(1, "week"));
  };

  const isThisWeekOrFuture = startOfCurrentWeek.isSameOrAfter(
    today.clone().startOf("isoWeek")
  );

  // Formatting logic
  const sameMonth = startOfCurrentWeek.month() === endOfCurrentWeek.month();

  const formattedDate = sameMonth
    ? `${startOfCurrentWeek.format("MMMM D")} - ${endOfCurrentWeek.format(
        "D, YYYY"
      )}`
    : `${startOfCurrentWeek.format("MMMM D")} - ${endOfCurrentWeek.format(
        "MMMM D, YYYY"
      )}`;

  return (
    <TooltipProvider>
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePreviousWeek}
            aria-label="Previous week"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNextWeek}
                aria-label="Next week"
                disabled={isThisWeekOrFuture}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            {isThisWeekOrFuture && (
              <TooltipContent>
                <p>You cannot go beyond the current week.</p>
              </TooltipContent>
            )}
          </Tooltip>
        </div>

        <div className="text-sm font-medium">{formattedDate}</div>
      </div>
    </TooltipProvider>
  );
};

export default WeekNavigator;
