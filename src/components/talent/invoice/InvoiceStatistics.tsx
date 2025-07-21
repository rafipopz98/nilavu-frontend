import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface StatisticsData {
  month: string;
  amount: number;
}

interface InvoiceStatisticsProps {
  data: StatisticsData[];
  title?: string;
}

export const InvoiceStatistics = ({
  data,
  title = "Statistics Overview",
}: InvoiceStatisticsProps) => {
  const maxValue = Math.max(...data.map((d) => d.amount));
  const highlightedMonth = data.find((d) => d.amount === maxValue);

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <Badge variant="outline" className="">
          Monthly
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="h-[187 px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                fontSize={12}
                className="text-muted-foreground"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                fontSize={12}
                className="text-muted-foreground"
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-black text-white p-2 rounded-md shadow-lg">
                        <p className="text-sm">{`${label}: $${(
                          (payload[0].value as number) / 1000
                        ).toFixed(1)}k`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="amount"
                fill="#60a5fa"
                radius={[4, 4, 0, 0]}
                className="transition-all duration-200"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {highlightedMonth && (
          <div className="mt-4 text-sm text-muted-foreground">
            Peak month:{" "}
            <span className="font-medium text-foreground">
              {highlightedMonth.month}
            </span>{" "}
            with{" "}
            <span className="font-medium text-foreground">
              ${(highlightedMonth.amount / 1000).toFixed(1)}k
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
