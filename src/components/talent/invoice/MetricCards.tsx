import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  TrendingUp,
  TrendingDown,
  CreditCard,
  Clock,
  DollarSign,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
}

const MetricCard = ({ title, value, change, trend, icon }: MetricCardProps) => {
  const isPositive = trend === "up";

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-xs mt-1">
          {isPositive ? (
            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
          )}
          <span className={isPositive ? "text-green-500" : "text-red-500"}>
            {change}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

interface MetricCardsProps {
  metrics: {
    totalRevenue: { value: string; change: string; trend: "up" | "down" };
    receivedPayments: { value: string; change: string; trend: "up" | "down" };
    refunds: { value: string; change: string; trend: "up" | "down" };
    avgPaymentTime: { value: string; change: string; trend: "up" | "down" };
  };
}

export const MetricCards = ({ metrics }: MetricCardsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      <MetricCard
        title="Total Revenue"
        value={metrics.totalRevenue.value}
        change={metrics.totalRevenue.change}
        trend={metrics.totalRevenue.trend}
        icon={<DollarSign />}
      />
      <MetricCard
        title="Received Payments"
        value={metrics.receivedPayments.value}
        change={metrics.receivedPayments.change}
        trend={metrics.receivedPayments.trend}
        icon={<CreditCard />}
      />
      <MetricCard
        title="Refunds"
        value={metrics.refunds.value}
        change={metrics.refunds.change}
        trend={metrics.refunds.trend}
        icon={<TrendingDown />}
      />
      <MetricCard
        title="Avg. Payment Time"
        value={metrics.avgPaymentTime.value}
        change={metrics.avgPaymentTime.change}
        trend={metrics.avgPaymentTime.trend}
        icon={<Clock />}
      />
    </div>
  );
};
