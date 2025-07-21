import TimeSheets from "../../components/talent/time-tracker/TimeSheets";
import WeekNavigator from "../../components/talent/time-tracker/WeekNavigator";

const TimeTracker = () => {
  return (
    <div className="flex flex-col gap-4 my-6">
      <WeekNavigator />
      <TimeSheets />
    </div>
  );
};

export default TimeTracker;
