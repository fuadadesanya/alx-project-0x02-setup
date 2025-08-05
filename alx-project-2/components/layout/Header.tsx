'use client';

import React, { FC } from 'react';
import Link from 'next/link';

const accommodationTypes: string[] = [
  'Rooms',
  'Mansion',
  'Countryside',
  'Chalet',
  'Villa',
  'Beachfront'
];

const Header: FC = () => {
  return (
    <header className="w-full bg-white shadow-md p-4">
      {/* Top: Logo + Sign in/Sign up */}
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          StayFinder
        </Link>

        <div className="space-x-4">
          <Link href="/signin">
            <button className="px-4 py-2 border rounded hover:bg-gray-100">Sign in</button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Sign up
            </button>
          </Link>
        </div>
      </div>

      {/* Search bar */}
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search destinations or properties"
          className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Search
        </button>
      </div>

      {/* Accommodation types */}
      <nav className="flex flex-wrap gap-4 text-sm text-gray-700">
        {accommodationTypes.map((type: string) => (
          <button key={type} className="hover:text-blue-600 hover:underline">
            {type}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
