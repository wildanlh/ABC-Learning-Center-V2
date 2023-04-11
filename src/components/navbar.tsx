import React, { useState } from "react";
import Button from "./button";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
                className="text-black hover:text-black focus:outline-none focus:text-black"
                onClick={toggleMobileMenu}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g clip-path="url(#clip0_429_11066)">
                      <path
                        d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                        stroke="#292929"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_429_11066">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.000915527)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-4 py-5 md:py-0`}
          >
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
            <div className="flex">
              <Button className="mt-5 md:mt-0">Join</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
