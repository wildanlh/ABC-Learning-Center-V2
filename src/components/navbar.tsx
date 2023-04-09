import React from "react";
import Button from "./button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-white drop-shadow-md">
      <div className="container mx-auto px-12 py-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div className="text-blue-600">
              <Link href="/" className="text-4xl font-bold">
                ABC
              </Link>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-200 hover:text-white focus:outline-none focus:text-white"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/"
              className="py-2 px-4  text-black font-bold hover:border-b-2 hover:border-black duration-100 ease-linear"
            >
              Home
            </Link>
            <Link
              href="/learn"
              className="py-2 px-4  text-black font-bold hover:border-b-2 hover:border-black duration-100 ease-linear"
            >
              Learn
            </Link>
            <Link
              href="/about"
              className="py-2 px-4  text-black font-bold hover:border-b-2 hover:border-black duration-100 ease-linear"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="py-2 px-4  text-black font-bold hover:border-b-2 hover:border-black duration-100 ease-linear"
            >
              Contact
            </Link>
            <Button className="">Join</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
