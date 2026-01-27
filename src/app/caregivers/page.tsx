"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Caregiver = {
  id: number;
  name: string;
  location: string;
  ratePerHour: number;
  rating: number;
};

export default function CaregiversPage() {
  const [loading, setLoading] = useState(true);
  const [caregivers, setCaregivers] = useState<Caregiver[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setCaregivers([
        {
          id: 1,
          name: "Aisha Bello",
          location: "Yaba, Lagos",
          ratePerHour: 5000,
          rating: 4.8,
        },
        {
          id: 2,
          name: "Samuel Okafor",
          location: "Gwarinpa, Abuja",
          ratePerHour: 4500,
          rating: 4.5,
        },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <main
      className="min-h-screen px-4 py-6 md:px-6 md:py-10"
      aria-labelledby="page-title"
    >
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Header */}
        <header>
          <h1
            id="page-title"
            className="text-xl md:text-2xl font-bold"
          >
            Find a Caregiver
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Verified caregivers available for home care
          </p>
        </header>

        {/* Loading Skeleton */}
        {loading && (
          <section
            aria-live="polite"
            aria-busy="true"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border rounded-lg p-5 space-y-3 animate-pulse"
              >
                <div className="h-5 bg-gray-200 rounded w-2/3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </section>
        )}

        {/* Empty State */}
        {!loading && caregivers.length === 0 && (
          <section
            role="status"
            className="text-center py-20 border rounded-lg"
          >
            <p className="text-lg font-medium">
              No caregivers available
            </p>
            <p className="text-gray-600 mt-2 text-sm">
              Please check back later
            </p>
          </section>
        )}

        {/* Caregiver Cards */}
        {!loading && caregivers.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {caregivers.map((caregiver) => (
              <article
                key={caregiver.id}
                className="border rounded-lg p-5 space-y-3 focus-within:ring-2 focus-within:ring-blue-500"
              >
                <div>
                  <h2 className="font-semibold text-lg">
                    {caregiver.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {caregiver.location}
                  </p>
                </div>

                <div
                  className="flex justify-between text-sm"
                  aria-label="Caregiver rate and rating"
                >
                  <span>
                    ₦{caregiver.ratePerHour.toLocaleString()} / hour
                  </span>
                  <span className="text-yellow-600">
                    {caregiver.rating} ★
                  </span>
                </div>

                <Link
                  href={`/caregivers/${caregiver.id}`}
                  className="block text-center bg-blue-600 text-white py-3 rounded-md
                             focus:outline-none focus:ring-2 focus:ring-blue-500
                             hover:bg-blue-700 transition"
                  aria-label={`View profile of ${caregiver.name}`}
                >
                  View Profile
                </Link>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
