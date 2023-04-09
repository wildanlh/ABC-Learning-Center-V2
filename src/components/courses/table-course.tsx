import React from "react";

interface ScheduleItem {
  id: number;
  code: string;
  module: string;
  class: string;
  date: string;
  time: string;
  location: string;
}

interface Props {
  schedule: ScheduleItem[];
}

const TableCourse: React.FC<Props> = ({ schedule }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-black ">
        <thead className="text-base text-white uppercase bg-blue-600">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Code
            </th>
            <th scope="col" className="px-6 py-3">
              Module
            </th>
            <th scope="col" className="px-6 py-3">
              Class
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
          </tr>
        </thead>

        <tbody>
          {schedule.map((item) => (
            <tr className="bg-white border-b" key={item.id}>
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.code}</td>
              <td className="px-6 py-4">{item.module}</td>
              <td className="px-6 py-4">{item.class}</td>
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4">{item.time}</td>
              <td className="px-6 py-4">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCourse;
