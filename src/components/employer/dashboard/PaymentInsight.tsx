import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Info } from "lucide-react";

const PaymentInsight: React.FC = () => {
  const paymentStats = [
    {
      title: "Pending Payouts",
      value: "12",
      icon: <Info className="w-5 h-5" />,
      description: "Payouts awaiting approval or processing.",
    },
    {
      title: "Processing",
      value: "43",
      icon: <Info className="w-5 h-5" />,
      description: "Payments currently being transferred.",
    },
    {
      title: "Completed",
      value: "735",
      icon: <CheckCircle className="w-5 h-5" />,
      description: "All payments successfully received.",
    },
  ];

  const recentPayouts = [
    { name: "John Doe", account: "**** 882", amount: "$1,200.00" },
    { name: "Maria Lopez", account: "**** 216", amount: "$980.00" },
    { name: "David Smith", account: "**** 463", amount: "$1,540.00" },
    { name: "Emily Green", account: "**** 711", amount: "$2,100.00" },
  ];

  return (
    <div className="mt-6 font-geist">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
        <section className="w-full lg:w-2/3 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">
              Payment Overview
            </h3>
            <Link
              to="/employer/dashboard/payments"
              className="flex items-center gap-1 text-primary hover:underline text-sm"
            >
              View All
            </Link>
          </div>

          <div className="rounded-2xl border border-border backdrop-blur-sm bg-background/70 p-6 space-y-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Payouts</p>
                <h2 className="text-3xl font-bold tracking-tight">1,290</h2>
              </div>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {paymentStats.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border p-4 flex flex-col justify-between transition hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">{item.title}</h4>
                    {item.icon}
                  </div>
                  <div className="mt-2">
                    <h3 className="text-2xl font-semibold">{item.value}</h3>
                    <p className="text-xs text-muted-foreground mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Section — Recent Payouts */}
        <section className="w-full lg:w-1/3 flex flex-col rounded-2xl border border-border bg-background/60 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground">
              Recent Payouts
            </h3>
          </div>

          <div className="p-4 flex-1 space-y-3 overflow-y-auto max-h-[240px]">
            {recentPayouts.map((payout, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-border p-3 hover:bg-accent transition"
              >
                <div>
                  <p className="text-sm font-medium">{payout.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Account {payout.account}
                  </p>
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {payout.amount}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentInsight;
