"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  Users,
  CheckCircle2,
  Shield,
  ArrowRight,
  Info,
} from "lucide-react";

export default function AddSeatsPage() {
  const [selectedSeats, setSelectedSeats] = useState(1);
  const currentSeats = 5; // Mock current seats
  const pricePerSeat = 99;

  const subtotal = selectedSeats * pricePerSeat;
  const total = subtotal;

  const handleIncrement = () => {
    setSelectedSeats((prev) => Math.min(prev + 1, 100));
  };

  const handleDecrement = () => {
    setSelectedSeats((prev) => Math.max(prev - 1, 1));
  };

  const quickSelectOptions = [1, 5, 10, 20];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Current Status & Selector */}
          <div className="lg:col-span-3 space-y-6">
            {/* Current Seats */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Current Active Seats
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-1">
                    {currentSeats}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Seats currently in your account
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                    Active
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    ${pricePerSeat}/seat/mo
                  </div>
                </div>
              </div>
            </div>

            {/* Seat Selector */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-1">
                    Select Additional Seats
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Choose how many seats you want to add
                  </p>
                </div>
              </div>

              {/* Counter */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-6 mb-6">
                  <button
                    onClick={handleDecrement}
                    disabled={selectedSeats <= 1}
                    className="group w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-border bg-background hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center active:scale-95"
                  >
                    <Minus className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </button>

                  <div className="text-center">
                    <div className="text-6xl sm:text-7xl font-bold text-foreground mb-2 tabular-nums">
                      {selectedSeats}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {selectedSeats === 1 ? "Seat" : "Seats"}
                    </div>
                  </div>

                  <button
                    onClick={handleIncrement}
                    disabled={selectedSeats >= 100}
                    className="group w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-border bg-background hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center active:scale-95"
                  >
                    <Plus className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </button>
                </div>

                {/* Quick Select Buttons */}
                <div className="flex items-center gap-3 justify-center flex-wrap">
                  {quickSelectOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedSeats(option)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedSeats === option
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {option} {option === 1 ? "Seat" : "Seats"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Total Seats */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Total Seats After Purchase
                      </div>
                      <div className="text-2xl font-bold text-foreground">
                        {currentSeats + selectedSeats}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-2 space-y-5">
            <div className="sticky top-8 rounded-2xl border border-border bg-card p-6 py-4 shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {selectedSeats} x Seats
                  </span>
                  <span className="font-medium text-foreground">
                    ${pricePerSeat.toFixed(2)}/seat
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="h-px bg-border" />

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-foreground">
                    Total
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">
                      ${total.toFixed(2)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      per month
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-6 p-4 rounded-xl bg-muted/50">
                <div className="text-sm font-semibold text-foreground mb-2">
                  What you get:
                </div>
                {[
                  "Post unlimited jobs per seat",
                  "Access to verified talent pool",
                  "Built-in communication tools",
                  "Complete hiring management",
                  "Attendance & time tracking",
                  "Invoice & payment processing",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full py-4 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group">
                <span>Complete Purchase</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Secure Payment</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <div className="flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" />
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expanded "How Seats Work" section - Full Width */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm">
                How Seats Work
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Each seat allows you to post one job and manage the complete
                hiring flow. When you send an offer, the seat freezes until the
                candidate responds. Once accepted, the seat locks to that hire
                until their engagement ends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
