export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-center">
        Trusted caregivers for your loved ones
      </h1>

      <p className="mt-4 text-center text-gray-600 max-w-xl">
        Find verified caregivers for elderly or disabled family members across Nigeria.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md">
          Find a Caregiver
        </button>

        <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md">
          Become a Caregiver
        </button>
      </div>
    </main>
  );
}
