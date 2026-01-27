"use client";

import { useParams, useRouter } from "next/navigation";

export default function BookingDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  // Mock booking data (frontend-only for now)
  const booking = {
    id,
    caregiverName: "Aisha Bello",
    caregiverPhone: "0803 456 7890",
    date: "10 February 2026",
    time: "9:00 AM",
    hours: 4,
    ratePerHour: 5000,
    status: "Upcoming",
  };

  const total = booking.hours * booking.ratePerHour;

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Header */}
        <div>
          <button
            onClick={() => router.back()}
            className="text-sm text-blue-600 mb-4"
          >
            ← Back to My Bookings
          </button>

          <h1 className="text-2xl font-bold">Booking Details</h1>
        </div>

        {/* Booking Card */}
        <div className="border rounded-lg p-6 space-y-4">

          {/* Caregiver Info */}
          <div>
            <h2 className="font-semibold text-lg">
              {booking.caregiverName}
            </h2>
            <p className="text-sm text-gray-600">
              Phone: {booking.caregiverPhone}
            </p>
          </div>

          <hr />

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Date</p>
              <p className="font-medium">{booking.date}</p>
            </div>

            <div>
              <p className="text-gray-500">Time</p>
              <p className="font-medium">{booking.time}</p>
            </div>
          </div>

          {/* Duration & Cost */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Duration</p>
              <p className="font-medium">{booking.hours} hours</p>
            </div>

            <div>
              <p className="text-gray-500">Rate</p>
              <p className="font-medium">
                ₦{booking.ratePerHour.toLocaleString()} / hour
              </p>
            </div>
          </div>

          <hr />

          {/* Total */}
          <div className="flex justify-between items-center">
            <p className="font-semibold">Total Amount</p>
            <p className="text-lg font-bold">
              ₦{total.toLocaleString()}
            </p>
          </div>

          {/* Status */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Status</p>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              {booking.status}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button className="border px-4 py-2 rounded-md text-sm">
              Cancel Booking
            </button>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
              Contact Caregiver
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
