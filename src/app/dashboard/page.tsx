"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type Booking = {
  id: number;
  caregiverName: string;
  date: string;
  time: string;
  hours: number;
  total: number;
  status: "upcoming" | "completed" | "cancelled";
};

export default function DashboardPage() {
  const router = useRouter();

  // Mock booking data (frontend-only)
  const bookings: Booking[] = [
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
  ];

  const upcomingBooking = bookings.find(
    (b) => b.status === "upcoming"
  );

  const totalSpent = bookings
    .filter((b) => b.status === "completed")
    .reduce((sum, b) => sum + b.total, 0);

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    document.cookie = "auth=; Max-Age=0; path=/";
    router.push("/login");
  };

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-600">
              Overview of your caregiver bookings
            </p>
          </div>

          <button
            onClick={logout}
            className="border px-4 py-2 rounded-md text-sm text-red-600"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-5">
            <p className="text-sm text-gray-500">Total Bookings</p>
            <p className="text-2xl font-bold">
              {bookings.length}
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <p className="text-sm text-gray-500">Total Spent</p>
            <p className="text-2xl font-bold">
              ₦{totalSpent.toLocaleString()}
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <p className="text-sm text-gray-500">Completed Care</p>
            <p className="text-2xl font-bold">
              {bookings.filter(b => b.status === "completed").length}
            </p>
          </div>
        </div>

        {/* Upcoming Booking */}
        <div className="border rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-semibold">
            Upcoming Booking
          </h2>

          {upcomingBooking ? (
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-medium">
                  {upcomingBooking.caregiverName}
                </p>
                <p className="text-sm text-gray-600">
                  {upcomingBooking.date} • {upcomingBooking.time}
                </p>
                <p className="text-sm text-gray-600">
                  ₦{upcomingBooking.total.toLocaleString()}
                </p>
              </div>

              <Link
                href={`/bookings/${upcomingBooking.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm text-center"
              >
                View Booking
              </Link>
            </div>
          ) : (
            <p className="text-gray-500">
              No upcoming bookings.
            </p>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/caregivers"
            className="border rounded-lg p-6 hover:bg-gray-50"
          >
            <h3 className="font-semibold">Find a Caregiver</h3>
            <p className="text-sm text-gray-600">
              Browse verified caregivers near you
            </p>
          </Link>

          <Link
            href="/bookings"
            className="border rounded-lg p-6 hover:bg-gray-50"
          >
            <h3 className="font-semibold">My Bookings</h3>
            <p className="text-sm text-gray-600">
              Manage, reschedule, or review bookings
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
