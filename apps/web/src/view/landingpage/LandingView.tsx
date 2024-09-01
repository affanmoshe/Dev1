'use client';
import React from 'react';
import Link from 'next/link';

function LandingView() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/farmingimage.jpeg)' }}
    >
      <nav className="flex justify-between items-center p-6 bg-black bg-opacity-50">
        <div className="text-white text-3xl font-extrabold">farmers market</div>
        <div className="space-x-4">
          <Link href="/login" legacyBehavior>
            <a className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
              Login
            </a>
          </Link>
          <Link href="/register" legacyBehavior>
            <a className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300">
              Register
            </a>
          </Link>
        </div>
      </nav>
      <div className="flex h-[calc(100vh-72px)] items-center justify-center bg-black bg-opacity-50">
        <div className="text-center px-6 md:px-12 lg:px-24">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
            Discover and manage your farm with ease
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Everything you need to make your farm sells, right at your
            fingertips.
          </p>
          <Link href="/discovery" legacyBehavior>
            <a className="px-8 py-3 text-lg font-semibold bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition duration-300">
              Get Started
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingView;
