import { useState } from "react";
import { LeaveRequestModal } from "../../components/talent/leave-request/LeaveRequestModal";
import { LeaveSummary } from "../../components/talent/leave-request/LeaveSummary";
import { LeaveCalendar } from "../../components/talent/leave-request/LeaveCalender";

const LeaveRequest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDate(undefined);
  };

  const leaveData = {
    availableLeave: 18,
    nationalHolidays: 21,
  };

  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto py-4 px-3">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Leave Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage your time off requests and view your leave balance
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="xl:col-span-2">
            <LeaveCalendar
              onDateSelect={handleDateSelect}
              selectedDate={selectedDate}
            />
          </div>

          {/* Leave Summary Section */}
          <div className="xl:col-span-1">
            <LeaveSummary
              availableLeave={leaveData.availableLeave}
              nationalHolidays={leaveData.nationalHolidays}
            />
          </div>
        </div>
      </div>

      {/* Leave Request Modal */}
      <LeaveRequestModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default LeaveRequest;
