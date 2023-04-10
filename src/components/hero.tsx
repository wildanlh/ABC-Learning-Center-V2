import Image from "next/image";
import React from "react";
import Button from "./button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="container mx-auto px-3 pt-28 lg:px-28">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/images/laptop.png"
            alt="laptop"
            width={500}
            height={500}
            className="rounded-lg w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-6 text-black">
          <h2 className="font-bold mb-2 text-4xl md:text-5xl mt-10 lg:mt-0 text-center lg:text-left">
            ABC Learning Center
          </h2>
          <p className="text-base md:text-lg text-center lg:text-left">
            Welcome to ABC Learning Center, a website where you can learn about
            software development or web development, and much more about
            programming.
          </p>
          <div className="flex justify-center lg:block">
            <Link href="/learn">
              <Button className="mt-6">See More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
