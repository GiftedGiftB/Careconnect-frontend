"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // Mock authentication
    localStorage.setItem("isAuthenticated", "true");

    // Set cookie for middleware
    document.cookie = "auth=true; path=/";

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full border rounded-lg p-8 space-y-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md px-3 py-2"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-md px-3 py-2"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-md"
        >
          Login
        </button>
      </div>
    </main>
  );
}