import React from "react";
import Button from "../button";

export default function FollowContact() {
  return (
    <div className="bg-blue-600 rounded-lg p-10 w-full shadow-md">
      <h1 className="text-3xl font-bold text-white text-center mb-10">
        Follow for the Information
      </h1>
      <form action="/send-data-here" method="post">
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-white text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Your email address"
          required
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-blue-600 py-2 px-6 border bg-white border-white rounded-lg font-bold hover:bg-slate-100 hover:duration-300 hover:ease-in-out mt-5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
