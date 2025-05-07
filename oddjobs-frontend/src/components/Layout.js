// components/Layout.js
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            OddJobs
          </Link>
          <nav className="space-x-4">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/my-jobs">My Jobs</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-6">{children}</main>
      <footer className="text-center text-sm py-6 text-gray-500">
        © {new Date().getFullYear()} OddJobs. All rights reserved.
      </footer>
    </div>
  );
}
