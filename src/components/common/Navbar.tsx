import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          CareConnect
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-gray-700 hover:text-blue-600">
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}
