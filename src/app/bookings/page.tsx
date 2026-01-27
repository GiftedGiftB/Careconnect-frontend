"use client";

import { useState } from "react";
import Link from "next/link";

type BookingStatus = "upcoming" | "completed" | "cancelled";

type Booking = {
  id: number;
  caregiverName: string;
  date: string;
  time: string;
  hours: number;
  total: number;
  status: BookingStatus;
  rating?: number;
  review?: string;
};

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      caregiverName: "Aisha Bello",
      date: "2026-02-10",
      time: "09:00 AM",
      hours: 4,
      total: 20000,
      status: "upcoming",
    },
    {
      id: 2,
      caregiverName: "Samuel Okafor",
      date: "2026-01-25",
      time: "10:00 AM",
      hours: 6,
      total: 30000,
      status: "completed",
    },
  ]);

  const [rescheduleId, setRescheduleId] = useState<number | null>(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  const [reviewingId, setReviewingId] = useState<number | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState("");

  const cancelBooking = (id: number) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: "cancelled" } : b
      )
    );
  };

  const openReschedule = (id: number) => {
    setRescheduleId(id);
    setNewDate("");
    setNewTime("");
  };

  const saveReschedule = () => {
    if (!newDate || !newTime || rescheduleId === null) return;

    setBookings((prev) =>
      prev.map((b) =>
        b.id === rescheduleId
          ? { ...b, date: newDate, time: newTime }
          : b
      )
    );

    setRescheduleId(null);
  };

  const openReview = (id: number) => {
    setReviewingId(id);
    setRating(0);
    setReviewText("");
  };

  const submitReview = () => {
    if (reviewingId === null || rating === 0) return;

    setBookings((prev) =>
      prev.map((b) =>
        b.id === reviewingId
          ? { ...b, rating, review: reviewText }
          : b
      )
    );

    setReviewingId(null);
  };

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">My Bookings</h1>
          <p className="text-gray-600">
            Manage, reschedule, and review your caregiver bookings
          </p>
        </div>

        {/* Booking List */}
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="border rounded-lg p-5 space-y-4"
            >
              {/* Booking Info */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="font-semibold text-lg">
                    {booking.caregiverName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {booking.date} • {booking.time}
                  </p>
                  <p className="text-sm text-gray-600">
                    {booking.hours} hours • ₦{booking.total.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className={`px-3 py-1 text-sm rounded-full font-medium ${
                      booking.status === "upcoming"
                        ? "bg-blue-100 text-blue-700"
                        : booking.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {booking.status.toUpperCase()}
                  </span>

                  <Link
                    href={`/bookings/${booking.id}`}
                    className="border px-4 py-2 rounded-md text-sm"
                  >
                    View
                  </Link>

                  {booking.status === "upcoming" && (
                    <>
                      <button
                        onClick={() => openReschedule(booking.id)}
                        className="border px-4 py-2 rounded-md text-sm"
                      >
                        Reschedule
                      </button>

                      <button
                        onClick={() => cancelBooking(booking.id)}
                        className="border px-4 py-2 rounded-md text-sm text-red-600"
                      >
                        Cancel
                      </button>
                    </>
                  )}

                  {booking.status === "completed" &&
                    booking.rating === undefined && (
                      <button
                        onClick={() => openReview(booking.id)}
                        className="border px-4 py-2 rounded-md text-sm"
                      >
                        Leave Review
                      </button>
                    )}
                </div>
              </div>

              {/* Reschedule Section */}
              {rescheduleId === booking.id && (
                <div className="border-t pt-4 space-y-3">
                  <p className="font-medium">Reschedule Booking</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="date"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      className="border rounded-md px-3 py-2"
                    />
                    <input
                      type="time"
                      value={newTime}
                      onChange={(e) => setNewTime(e.target.value)}
                      className="border rounded-md px-3 py-2"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={saveReschedule}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setRescheduleId(null)}
                      className="border px-4 py-2 rounded-md text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {/* Review Section */}
              {reviewingId === booking.id && (
                <div className="border-t pt-4 space-y-3">
                  <p className="font-medium">Rate & Review</p>

                  {/* Stars */}
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className={`text-2xl ${
                          star <= rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>

                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Write your experience..."
                    className="w-full border rounded-md px-3 py-2"
                  />

                  <div className="flex gap-3">
                    <button
                      onClick={submitReview}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                    >
                      Submit Review
                    </button>
                    <button
                      onClick={() => setReviewingId(null)}
                      className="border px-4 py-2 rounded-md text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {/* Display Submitted Review */}
              {booking.rating && (
                <div className="border-t pt-4 text-sm">
                  <p className="font-medium">Your Review</p>
                  <p className="text-yellow-500">
                    {"★".repeat(booking.rating)}
                  </p>
                  <p className="text-gray-600">{booking.review}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
