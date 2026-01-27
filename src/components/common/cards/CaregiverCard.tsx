import Link from "next/link";

type Caregiver = {
  id: number;
  name: string;
  location: string;
  rating: number;
  rate: number;
};

export default function CaregiverCard({
  caregiver,
}: {
  caregiver: Caregiver;
}) {
  return (
    <div className="border rounded-lg p-6 shadow-sm">
      <div className="h-32 bg-gray-200 rounded-md mb-4" />

      <h2 className="text-lg font-semibold">
        {caregiver.name}
      </h2>

      <p className="text-sm text-gray-600">
        {caregiver.location}
      </p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-sm">
          ⭐ {caregiver.rating}
        </span>

        <span className="text-sm font-medium">
          ₦{caregiver.rate.toLocaleString()}/hr
        </span>
      </div>

      <Link
        href={`/caregivers/${caregiver.id}`}
        className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-md"
      >
        View Profile
      </Link>
    </div>
  );
}
