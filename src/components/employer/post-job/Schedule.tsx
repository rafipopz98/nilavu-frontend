import type { JobFormData } from "../../../lib/types/employer/post-job";
import { Calendar, Clock, Globe } from "lucide-react";

interface ScheduleSectionProps {
  formData: JobFormData;
  updateField: (field: keyof JobFormData, value: any) => void;
}

const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const TIMEZONES = [
  "UTC−12:00",
  "UTC−08:00 (Pacific Time)",
  "UTC−05:00 (Eastern Time)",
  "UTC±00:00 (GMT)",
  "UTC+01:00 (Central Europe)",
  "UTC+05:30 (India Standard Time)",
  "UTC+08:00 (China Standard Time)",
  "UTC+09:00 (Japan Standard Time)",
  "UTC+10:00 (Australia Eastern Time)",
];

export const ScheduleSection = ({
  formData,
  updateField,
}: ScheduleSectionProps) => {
  const toggleDay = (day: string) => {
    const currentDays = formData.workingDays || [];
    if (currentDays.includes(day)) {
      updateField(
        "workingDays",
        currentDays.filter((d) => d !== day)
      );
    } else {
      updateField("workingDays", [...currentDays, day]);
    }
  };

  return (
    <section className="rounded-xl border border-border/60 bg-card px-6 py-8 md:px-8 md:py-10 transition-colors">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
          <Calendar className="text-primary" size={22} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Schedule & Timings
          </h2>
          <p className="text-sm text-muted-foreground">
            Set the working structure and availability
          </p>
        </div>
      </div>

      {/* Schedule Type */}
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Work Schedule <span className="text-destructive">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {["flexible", "structured"].map((type) => {
              const active = formData.timings === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => updateField("timings", type)}
                  className={`w-full rounded-lg border px-4 py-3 text-sm font-medium capitalize transition-colors
                    ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-primary/40 hover:bg-primary/5"
                    }`}
                >
                  {type === "flexible" ? "Flexible Hours" : "Structured Hours"}
                </button>
              );
            })}
          </div>
        </div>

        {/* Structured Options */}
        {formData.timings === "structured" && (
          <div className="space-y-6 pt-6 border-t border-border/50 animate-fade-in">
            {/* Working Days */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                <Calendar size={16} />
                Working Days <span className="text-destructive">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {DAYS.map((day) => {
                  const active = formData.workingDays?.includes(day);
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => toggleDay(day)}
                      className={`rounded-md border px-3 py-2 text-sm capitalize font-medium transition-colors
                        ${
                          active
                            ? "bg-primary/10 border-primary/70 text-primary"
                            : "border-border bg-background text-foreground hover:bg-muted"
                        }`}
                    >
                      {day.slice(0, 3)}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "Start Time", field: "startTime" },
                { label: "End Time", field: "endTime" },
              ].map(({ label, field }) => (
                <div key={field}>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2.5">
                    <Clock size={16} />
                    {label} <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="time"
                    value={(formData as any)[field] || ""}
                    onChange={(e) => updateField(field as any, e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-foreground text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-colors"
                  />
                </div>
              ))}
            </div>

            {/* Time Zone */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2.5">
                <Globe size={16} />
                Time Zone <span className="text-destructive">*</span>
              </label>
              <select
                value={formData.timeZone || ""}
                onChange={(e) => updateField("timeZone", e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-foreground text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-colors"
              >
                <option value="">Select Time Zone</option>
                {TIMEZONES.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
