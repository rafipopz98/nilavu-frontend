import { Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "../../ui/card";

interface LeaveSummaryProps {
  availableLeave: number;
  nationalHolidays: number;
}

export function LeaveSummary({ nationalHolidays }: LeaveSummaryProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Leave Summary</h2>
      </div>

      <div className="space-y-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">
                Total leave taken
              </p>
              <p className="text-2xl font-bold">20 days</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
              <Calendar className="h-5 w-5 text-gray-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">
                Leave taken this month
              </p>
              <p className="text-2xl font-bold">{nationalHolidays} days</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
