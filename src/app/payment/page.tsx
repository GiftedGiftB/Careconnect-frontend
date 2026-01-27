"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
  const searchParams = useSearchParams();

  const caregiverName = searchParams.get("name");
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const hours = Number(searchParams.get("hours")) || 1;
  const rate = Number(searchParams.get("rate")) || 5000;

  const total = hours * rate;

  return (
    <main className="min-h-screen px-6 py-10 flex justify-center">
      <div className="w-full max-w-md">
        {/* Page Title */}
        <h1 className="text-2xl font-bold mb-6">Payment</h1>

        {/* Booking Summary */}
        <div className="border rounded-lg p-4 mb-6">
          <h2 className="font-semibold mb-3">Booking Summary</h2>

          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Caregiver</span>
              <span>{caregiverName}</span>
            </div>

            <div className="flex justify-between">
              <span>Date</span>
              <span>{date}</span>
            </div>

            <div className="flex justify-between">
              <span>Time</span>
              <span>{time}</span>
            </div>

            <div className="flex justify-between">
              <span>Hours</span>
              <span>{hours}</span>
            </div>

            <div className="flex justify-between">
              <span>Rate</span>
              <span>₦{rate.toLocaleString()} / hr</span>
            </div>
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="border rounded-lg p-4 mb-6">
          <h2 className="font-semibold mb-3">Payment Method</h2>

          <label className="flex items-center gap-3 border rounded-md p-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              defaultChecked
              className="accent-blue-600"
            />
            <div>
              <p className="font-medium">Card / Bank Transfer</p>
              <p className="text-sm text-gray-500">
                Pay securely with Nigerian cards
              </p>
            </div>
          </label>
        </div>

        {/* Pay Button */}
        <a
          href={`/payment/success?name=${encodeURIComponent(
            caregiverName || ""
          )}&total=${total}`}
          className="block w-full bg-blue-600 text-white py-3 rounded-md text-center font-medium"
        >
          Pay ₦{total.toLocaleString()}
        </a>
      </div>
    </main>
  );
}
