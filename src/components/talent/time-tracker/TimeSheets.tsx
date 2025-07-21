"use client";

import { useState } from "react";
import { Copy, Trash2, PlusCircle, Download, ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Card, CardContent } from "../../ui/card";
import SmartTimeInput from "../../basic/RemoteTimeInputComponent";

type Entry = {
  start: string;
  end: string;
  type: string;
  description: string;
  duration: string;
};

type DayEntry = {
  date: string;
  totalHours: string;
  entries: Entry[];
};

const TimeTracker = () => {
  const [timeEntries, setTimeEntries] = useState<DayEntry[]>([
    {
      date: "Monday, Sep 23",
      totalHours: "7h 56m",
      entries: [
        {
          start: "08:15",
          end: "11:42",
          type: "Regular hours",
          description: "Accounting books revisions Q3",
          duration: "3h 27m",
        },
        {
          start: "11:42",
          end: "12:27",
          type: "Break",
          description: "Lunch break",
          duration: "0h 45m",
        },
        {
          start: "12:27",
          end: "16:56",
          type: "Regular hours",
          description: "Masterson audit",
          duration: "4h 29m",
        },
      ],
    },
    {
      date: "Tuesday, Sep 24",
      totalHours: "8h 0m",
      entries: [
        {
          start: "08:30",
          end: "12:00",
          type: "Regular hours",
          description: "Prepare financial statements",
          duration: "3h 30m",
        },
        {
          start: "12:00",
          end: "13:00",
          type: "Break",
          description: "Lunch break",
          duration: "1h 0m",
        },
        {
          start: "13:00",
          end: "17:00",
          type: "Regular hours",
          description: "Client meeting and follow-up",
          duration: "4h 0m",
        },
      ],
    },
    {
      date: "Wednesday, Sep 25",
      totalHours: "7h 45m",
      entries: [
        {
          start: "09:00",
          end: "12:15",
          type: "Regular hours",
          description: "Budget analysis Q4",
          duration: "3h 15m",
        },
        {
          start: "12:15",
          end: "13:00",
          type: "Break",
          description: "Lunch break",
          duration: "0h 45m",
        },
        {
          start: "13:00",
          end: "17:30",
          type: "Regular hours",
          description: "Team strategy planning",
          duration: "4h 30m",
        },
      ],
    },
    {
      date: "Thursday, Sep 26",
      totalHours: "8h 15m",
      entries: [
        {
          start: "08:00",
          end: "12:00",
          type: "Regular hours",
          description: "Internal system review",
          duration: "4h 0m",
        },
        {
          start: "12:00",
          end: "12:45",
          type: "Break",
          description: "Lunch break",
          duration: "0h 45m",
        },
        {
          start: "12:45",
          end: "17:00",
          type: "Regular hours",
          description: "Finalizing project proposals",
          duration: "4h 15m",
        },
      ],
    },
    {
      date: "Friday, Sep 27",
      totalHours: "7h 30m",
      entries: [],
    },
    {
      date: "Saturday, Sep 28",
      totalHours: "7h 30m",
      entries: [],
    },
    {
      date: "Sunday, Sep 29",
      totalHours: "7h 30m",
      entries: [],
    },
  ]);

  const handleAddRow = (dayIndex: number) => {
    const updated = [...timeEntries];
    updated[dayIndex].entries.push({
      start: "",
      end: "",
      type: "Regular hours",
      description: "",
      duration: "0h 0m",
    });
    setTimeEntries(updated);
  };

  const handleDeleteRow = (dayIndex: number, entryIndex: number) => {
    const updated = [...timeEntries];
    updated[dayIndex].entries.splice(entryIndex, 1);
    setTimeEntries(updated);
  };

  const handleDuplicateRow = (dayIndex: number, entryIndex: number) => {
    const updated = [...timeEntries];
    const entry = updated[dayIndex].entries[entryIndex];
    updated[dayIndex].entries.splice(entryIndex + 1, 0, { ...entry });
    setTimeEntries(updated);
  };

  const handleInputChange = (
    dayIndex: number,
    entryIndex: number,
    field: keyof Entry,
    value: string
  ) => {
    const updated = [...timeEntries];
    updated[dayIndex].entries[entryIndex][field] = value;
    setTimeEntries(updated);
  };

  return (
    <div className="mt-4 w-full flex flex-col gap-6 px-4 md:px-8">
      {/* Summary */}
      <div className="w-full max-w-md  text-center border border-border rounded-2xl p-4">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold text-foreground">40h 26m</h2>
          <p className="text-sm text-muted-foreground mt-2">
            worked this week (America/Los Angeles)
          </p>
          <Button className="w-full mt-6">Submit timesheet</Button>
          <p className="text-xs text-muted-foreground mt-4">
            Your timesheet will be sent for approval on{" "}
            <strong>Friday (Sep 27) at 20:00</strong>.
          </p>
        </CardContent>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Timesheet */}
        <div className="w-full lg:w-2/3 space-y-6">
          {timeEntries.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="flex flex-col border border-border rounded-2xl pb-4 gap-4"
            >
              <div className="px-4 py-2 bg-primary/10 flex justify-between items-center rounded-t-2xl border-b">
                <span className="text-sm font-medium text-foreground">
                  {day.date}
                </span>
                <span className="text-sm text-muted-foreground">
                  {day.totalHours}
                </span>
              </div>
              <CardContent className="space-y-4">
                {day.entries.map((entry, entryIndex) => (
                  <div
                    key={entryIndex}
                    className="flex flex-col sm:flex-row gap-4 items-start sm:items-center group w-full"
                  >
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:flex-wrap sm:items-end">
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <SmartTimeInput
                          value={entry.start}
                          placeholder="Clock In"
                          onChange={(val) =>
                            handleInputChange(
                              dayIndex,
                              entryIndex,
                              "start",
                              val
                            )
                          }
                        />
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <SmartTimeInput
                          value={entry.end}
                          placeholder="Clock Out"
                          onChange={(val) =>
                            handleInputChange(dayIndex, entryIndex, "end", val)
                          }
                        />
                      </div>

                      <Select
                        value={entry.type}
                        onValueChange={(value) =>
                          handleInputChange(dayIndex, entryIndex, "type", value)
                        }
                      >
                        <SelectTrigger className="w-full sm:w-48 min-w-[9rem]">
                          <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Regular hours">
                            Regular hours
                          </SelectItem>
                          <SelectItem value="Break">Break</SelectItem>
                          <SelectItem value="Overtime">Overtime</SelectItem>
                        </SelectContent>
                      </Select>

                      <Input
                        placeholder="Notes"
                        className="w-full"
                        value={entry.description}
                        onChange={(e) =>
                          handleInputChange(
                            dayIndex,
                            entryIndex,
                            "description",
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
                      <div className="flex gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            handleDuplicateRow(dayIndex, entryIndex)
                          }
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteRow(dayIndex, entryIndex)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {entry.duration}
                      </span>
                    </div>
                  </div>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAddRow(dayIndex)}
                  className="flex gap-2 items-center"
                >
                  <PlusCircle className="w-4 h-4" />
                  Add hours
                </Button>
              </CardContent>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 mt-6 lg:mt-0">
          <Card className="text-center">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-foreground">20h</h2>
              <p className="text-sm text-muted-foreground mt-2">
                worked this week (Asia/Calcutta)
              </p>
              <Button variant="outline" className="w-full mt-6">
                Save
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold text-foreground">
                Export your time worked
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                Set a timeline and export your time tracked for this period
              </p>
              <Button
                variant="outline"
                className="w-full mt-6 flex gap-2 items-center justify-center"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TimeTracker;
