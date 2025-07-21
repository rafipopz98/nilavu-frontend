import { mockMetrics, mockPaymentData } from "../../assets/invoiceData";
import { InvoiceTable } from "../../components/talent/invoice/InvoiceTable";
import { MetricCards } from "../../components/talent/invoice/MetricCards";

const Bonus = () => {
  return (
    <div className="mx-auto px-3 py-2 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Bonus</h1>
        <p className="text-muted-foreground">
          Overview of your performance and rewards
        </p>
      </div>
      <div className="lg:col-span-2">
        <MetricCards metrics={mockMetrics} />
      </div>
      <InvoiceTable payments={mockPaymentData} />
    </div>
  );
};

export default Bonus;
