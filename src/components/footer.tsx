import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white m-4">
      <div className="w-full  mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-center">
          <ul className="flex flex-wrap items-center space-x-4 font-bold text-blue-600 ">
            <li>
              <Link href="/sitemap" className="hover:text-blue-500">
                Sitemap
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-500">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <span className="block text-base text-black text-center pb-10 md:pb-0">
          &copy; 2022. <b>ABC Learning Center.</b> All Right Reserved.
        </span>
      </div>
    </footer>
  );
}
