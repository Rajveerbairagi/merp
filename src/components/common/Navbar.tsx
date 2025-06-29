"use client";

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className=" top-0 z-10 bg-white dark:bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/">
            <img src="https://pbs.twimg.com/profile_images/1937946402392317952/pWeGvU0t_400x400.jpg" alt="Logo" className="h-12 w-auto" />
          </Link>
          <div className="flex space-x-4 items-center">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Home
            </Link>
            <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Dashboard
            </Link>
            {user ? (
              <button onClick={logout} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Logout
              </button>
            ) : (
              <>
                <Link href="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Login
                </Link>
                <Link href="/auth/register" className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}