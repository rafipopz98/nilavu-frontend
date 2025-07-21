import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Button } from "../../ui/button";
interface LeaveCalendarProps {
  onDateSelect: (date: Date) => void;
  selectedDate?: Date;
}

export function LeaveCalendar({
  onDateSelect,
  selectedDate,
}: LeaveCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();

  const daysInMonth = lastDayOfMonth.getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const isToday = (date: number) => {
    return (
      today.getDate() === date &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };

  const isSelected = (date: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === date &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  const handleDateClick = (date: number) => {
    const clickedDate = new Date(year, month, date);
    onDateSelect(clickedDate);
  };

  const renderCalendarDays = () => {
    const days = [];

    // Adjust for Monday start (0 = Sunday, 1 = Monday, etc.)
    const adjustedFirstDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    // Previous month's trailing days
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
      const date = daysInPrevMonth - i;
      days.push(
        <button
          key={`prev-${date}`}
          className="h-20 w-full text-sm text-muted-foreground hover:bg-muted transition-colors flex items-start justify-start p-3 border-r border-b border"
          onClick={() => {
            const prevMonthDate = new Date(year, month - 1, date);
            onDateSelect(prevMonthDate);
          }}
        >
          {String(date).padStart(2, "0")}
        </button>
      );
    }

    // Current month days
    for (let date = 1; date <= daysInMonth; date++) {
      const isTodayDate = isToday(date);
      const isSelectedDate = isSelected(date);

      days.push(
        <button
          key={date}
          onClick={() => handleDateClick(date)}
          className={cn(
            "h-20 w-full text-sm transition-all duration-200 flex items-start justify-start p-3 border-r border-b border hover:bg-muted",
            isTodayDate && " text-primary-foreground",
            isSelectedDate && !isTodayDate && "bg-muted text-foreground"
          )}
        >
          <span
            className={cn(
              "font-medium",
              isTodayDate &&
                "bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs"
            )}
          >
            {isTodayDate ? date : String(date).padStart(2, "0")}
          </span>
        </button>
      );
    }

    // Next month's leading days to fill the grid
    const totalCells = Math.ceil((adjustedFirstDay + daysInMonth) / 7) * 7;
    const remainingCells = totalCells - days.length;

    for (let date = 1; date <= remainingCells; date++) {
      days.push(
        <button
          key={`next-${date}`}
          className="h-20 w-full text-sm text-muted-foreground hover:bg-muted transition-colors flex items-start justify-start p-3 border-r border-b border"
          onClick={() => {
            const nextMonthDate = new Date(year, month + 1, date);
            onDateSelect(nextMonthDate);
          }}
        >
          {String(date).padStart(2, "0")}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="rounded-lg border overflow-hidden bg-card text-card-foreground">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={goToToday}
            className="rounded-full px-4 py-2 text-sm font-medium"
          >
            Today
          </Button>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPreviousMonth}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={goToNextMonth}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-foreground">
          {monthNames[month]} {year}
        </h2>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 border-b">
        {dayNames.map((day) => (
          <div
            key={day}
            className="h-12 flex items-center justify-start px-3 text-sm font-medium text-muted-foreground border-r last:border-r-0"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7">{renderCalendarDays()}</div>
    </div>
  );
}
