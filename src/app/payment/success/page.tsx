"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();

  const caregiverName = searchParams.get("name");
  const total = Number(searchParams.get("total"));

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full border rounded-lg p-8 text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
          <span className="text-green-600 text-3xl">✓</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-2">
          Payment Successful
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Your caregiver booking has been confirmed.
        </p>

        {/* Summary */}
        <div className="border rounded-md p-4 text-sm text-left mb-6">
          <div className="flex justify-between mb-2">
            <span>Caregiver</span>
            <span className="font-medium">{caregiverName}</span>
          </div>

          <div className="flex justify-between">
            <span>Total Paid</span>
            <span className="font-medium">
              ₦{total.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="block w-full bg-blue-600 text-white py-3 rounded-md"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/dashboard"
            className="block w-full border py-3 rounded-md"
          >
            View My Bookings
          </Link>
        </div>
      </div>
    </main>
  );
}
