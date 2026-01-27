"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

type Review = {
  rating: number;
  review: string;
};

export default function CaregiverProfilePage() {
  const { id } = useParams();

  // Mock caregiver data
  const caregiver = {
    id,
    name: "Aisha Bello",
    location: "Yaba, Lagos",
    experience: "5 years",
    ratePerHour: 5000,
    skills: ["Elderly Care", "Medication Assistance", "Mobility Support"],
    reviews: [
      {
        rating: 5,
        review: "Very patient and professional. Took great care of my mum.",
      },
      {
        rating: 4,
        review: "Reliable and kind. Would definitely book again.",
      },
      {
        rating: 5,
        review: "Excellent service and punctual.",
      },
    ] as Review[],
  };

  const totalReviews = caregiver.reviews.length;
  const averageRating =
    caregiver.reviews.reduce((sum, r) => sum + r.rating, 0) /
    totalReviews;

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Header */}
        <div>
          <Link
            href="/caregivers"
            className="text-sm text-blue-600"
          >
            ← Back to Caregivers
          </Link>

          <h1 className="text-2xl font-bold mt-2">
            {caregiver.name}
          </h1>

          <p className="text-gray-600">
            {caregiver.location}
          </p>
        </div>

        {/* Rating Summary */}
        <div className="border rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-3xl font-bold text-yellow-500">
              {averageRating.toFixed(1)} ★
            </p>
            <p className="text-sm text-gray-600">
              Based on {totalReviews} reviews
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Rate</p>
            <p className="text-xl font-semibold">
              ₦{caregiver.ratePerHour.toLocaleString()} / hour
            </p>
          </div>

          <Link
            href={`/booking?name=${encodeURIComponent(
              caregiver.name
            )}&rate=${caregiver.ratePerHour}`}
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-center"
          >
            Book Caregiver
          </Link>
        </div>

        {/* About */}
        <div className="border rounded-lg p-6 space-y-2">
          <h2 className="font-semibold text-lg">About</h2>
          <p className="text-sm text-gray-600">
            {caregiver.name} has over {caregiver.experience} of experience
            providing compassionate home-based care for elderly and disabled
            individuals.
          </p>
        </div>

        {/* Skills */}
        <div className="border rounded-lg p-6">
          <h2 className="font-semibold text-lg mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {caregiver.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="border rounded-lg p-6 space-y-4">
          <h2 className="font-semibold text-lg">Reviews</h2>

          {caregiver.reviews.map((review, index) => (
            <div key={index} className="border-b pb-3 last:border-b-0">
              <p className="text-yellow-500">
                {"★".repeat(review.rating)}
              </p>
              <p className="text-sm text-gray-700">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
