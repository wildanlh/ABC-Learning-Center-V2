import Button from "@/components/button";
import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="container mx-auto px-36">
        <h1 className="text-6xl font-bold text-black text-center mb-10">
          404 Not Found
        </h1>
        <div className="flex justify-center">
          <Link href="/">
            <Button>Go to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
