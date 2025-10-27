import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const SeatSelector = () => {
  const [seats, setSeats] = useState(2);
  const pricePerSeat = 99;
  const subtotal = seats * pricePerSeat;

  const incrementSeats = () => setSeats((prev) => prev + 1);
  const decrementSeats = () => setSeats((prev) => Math.max(1, prev - 1));

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mx-auto">
      <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
        Plan Details
      </h3>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side - Seat Selection */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Number of Seats
          </label>
          <p className="text-sm text-gray-500 mb-5">
            Select how many seats you need for your team.
          </p>

          <div className="flex items-center justify-center gap-8">
            <button
              onClick={decrementSeats}
              disabled={seats <= 1}
              className={`w-12 h-12 flex items-center justify-center rounded-lg border transition-all ${
                seats <= 1
                  ? "border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700"
              }`}
            >
              <Minus className="w-5 h-5" />
            </button>

            <div className="text-6xl font-bold text-gray-900 min-w-[90px] text-center">
              {seats}
            </div>

            <button
              onClick={incrementSeats}
              className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all text-gray-700"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8 bg-gray-50 rounded-xl p-5 text-center">
            <div className="text-sm text-gray-600">Price per seat</div>
            <div className="text-3xl font-semibold text-gray-900 mt-1">
              ${pricePerSeat}
              <span className="text-base text-gray-500 font-normal">
                {" "}
                /month
              </span>
            </div>
          </div>
        </div>

        {/* Divider (mobile hidden) */}
        <div className="hidden md:block w-px bg-gray-200" />

        {/* Right Side - Summary */}
        <div className="flex-1">
          <h4 className="text-sm font-medium text-gray-900 mb-4">Summary</h4>

          <div className="bg-gray-50 rounded-xl p-6 space-y-4 border border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {seats}x Seat{seats > 1 ? "s" : ""} Subscription
              </span>
              <span className="font-semibold text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900 font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-gray-300 flex items-center justify-between">
              <span className="font-semibold text-gray-900 text-base">
                Due today
              </span>
              <span className="text-2xl font-bold text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>
          </div>

          <button className="w-full mt-6 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors shadow-sm">
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelector;
