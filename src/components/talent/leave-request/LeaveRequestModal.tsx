import React, { useState, useEffect } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { Label } from "../../ui/label";
import { Calendar } from "../../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { format } from "date-fns";
import { cn } from "../../../lib/utils";

interface LeaveRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate?: Date;
}

const leaveTypes = [
  { value: "annual", label: "Annual Leave" },
  { value: "sick", label: "Sick Leave" },
  { value: "personal", label: "Personal Leave" },
  { value: "maternity", label: "Maternity Leave" },
  { value: "paternity", label: "Paternity Leave" },
  { value: "emergency", label: "Emergency Leave" },
];

export function LeaveRequestModal({
  isOpen,
  onClose,
  selectedDate,
}: LeaveRequestModalProps) {
  const [leaveType, setLeaveType] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(selectedDate);
  const [notes, setNotes] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!leaveType || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    alert(
      `Your ${
        leaveTypes.find((t) => t.value === leaveType)?.label
      } request for ${format(
        date,
        "yyyy-MM-dd"
      )} has been submitted successfully.`
    );

    // Reset form and close modal
    setLeaveType("");
    setDate(undefined);
    setNotes("");
    onClose();
  };

  const handleCancel = () => {
    setLeaveType("");
    setDate(undefined);
    setNotes("");
    onClose();
  };

  useEffect(() => {
    if (selectedDate && isOpen) {
      setDate(selectedDate);
    }
  }, [selectedDate, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              Request time off
            </DialogTitle>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-6 pt-0 space-y-6">
          {/* Leave Type */}
          <div className="space-y-2">
            <Label htmlFor="leave-type" className="text-sm font-medium">
              Time off type <span className="text-red-500">*</span>
            </Label>
            <Select value={leaveType} onValueChange={setLeaveType}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select leave type" />
              </SelectTrigger>
              <SelectContent>
                {leaveTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Select the option that best describes your time off request.
            </p>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Date <span className="text-red-500">*</span>
            </Label>
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-12 w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "yyyy-MM-dd") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(selected) => {
                    setDate(selected);
                    if (selected) setIsCalendarOpen(false);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <p className="text-sm text-muted-foreground">
              Choose the day you want to request off.
            </p>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm font-medium">
              Notes
            </Label>
            <Textarea
              id="notes"
              placeholder="Add any additional notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[100px] resize-none"
            />
            <p className="text-sm text-muted-foreground">
              You can leave a message to the approver if needed.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Request time off
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
