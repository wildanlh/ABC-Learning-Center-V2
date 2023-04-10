import CardContact from "@/components/contacts/card-contact";
import Header from "@/components/header";
import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";

export default function Sitemap() {
  return (
    <>
      <Header pageTitle="Sitemap| ABC Learning Center" />
      <Layout>
        <div className="container mx-auto px-3 pt-28 lg:px-28">
          <h1 className="text-4xl font-bold text-black text-center mb-10">
            Sitemap
          </h1>
          <div className="bg-blue-600 p-10 rounded-2xl drop-shadow-lg hover:drop-shadow-xl hover:duration-500">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <CardContact title="Home">
                <hr />
                <ul className="text-left space-y-2 mt-3">
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/learn">Learn</Link>
                  </li>
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </CardContact>

              <CardContact title="Learn">
                <hr />
                <ul className="text-left space-y-2 mt-3">
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/learn/java">Java Course</Link>
                  </li>
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/learn/python">Python Course</Link>
                  </li>
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/learn/java/schedule">
                      Java Course Schedule
                    </Link>
                  </li>
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/learn/python/schedule">
                      Python Course Schedule
                    </Link>
                  </li>
                </ul>
              </CardContact>

              <CardContact title="About">
                <hr />
                <ul className="text-left space-y-2 mt-3">
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/about">Our Team</Link>
                  </li>
                </ul>
              </CardContact>

              <CardContact title="Contact">
                <hr />
                <ul className="text-left space-y-2 mt-3">
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/contact">Social Media</Link>
                  </li>
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/contact">Location</Link>
                  </li>
                  <li className="hover:translate-x-3 hover:duration-300 hover:ease-in-out hover:font-bold hover:underline">
                    <Link href="/contact">Need Help!</Link>
                  </li>
                </ul>
              </CardContact>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
