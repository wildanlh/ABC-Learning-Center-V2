import Image from "next/image";
import React from "react";
import Button from "./button";

export default function Hero() {
  return (
    <div className="container mx-auto px-28 pt-28">
      <div className="flex items-center">
        <div className="w-1/2">
          <Image
            src="/assets/images/laptop.png"
            alt="laptop"
            width={500}
            height={500}
            className="rounded-lg w-full"
          />
        </div>
        <div className="w-1/2 pl-6 text-black">
          <h2 className="text-5xl font-bold mb-2">ABC Learning Center</h2>
          <p className="text-lg">
            Welcome to ABC Learning Center, a website where you can learn about
            software development or web development, and much more about
            programming.
          </p>

          <Button className="mt-6">See More</Button>
        </div>
      </div>
    </div>
  );
}
