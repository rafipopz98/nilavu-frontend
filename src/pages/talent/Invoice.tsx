import {
  mockMetrics,
  mockPaymentData,
  mockStatisticsData,
} from "../../assets/invoiceData";
import { InvoiceStatistics } from "../../components/talent/invoice/InvoiceStatistics";
import { InvoiceTable } from "../../components/talent/invoice/InvoiceTable";
import { MetricCards } from "../../components/talent/invoice/MetricCards";

const Invoice = () => {
  return (
    <div className="mx-auto px-3 py-2 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Invoice Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your payment transactions and revenue metrics
        </p>
      </div>

      {/* Top Section: Metric Cards and Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Metric Cards */}
        <div className="lg:col-span-2">
          <MetricCards metrics={mockMetrics} />
        </div>

        {/* Right Side: Statistics Overview */}
        <div className="lg:col-span-1">
          <InvoiceStatistics data={mockStatisticsData} />
        </div>
      </div>

      {/* Bottom Section: Payment Management Table */}
      <InvoiceTable payments={mockPaymentData} />
    </div>
  );
};

export default Invoice;
