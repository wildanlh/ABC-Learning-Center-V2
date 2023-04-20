import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Header from "@/components/header";
import Layout from "@/components/layout";
import TableCourse from "@/components/courses/table-course";

interface ScheduleItem {
  id: number;
  code: string;
  module: string;
  class: string;
  date: string;
  time: string;
  location: string;
}

interface CourseDetails {
  [key: string]: CourseDetail;
  java: CourseDetail;
  python: CourseDetail;
}

interface CourseDetail {
  title: string;
  schedule: ScheduleItem[];
}

interface Props {
  courseDetail: CourseDetail;
}

const SchedulePage: React.FC<Props> = ({ courseDetail }) => {
  return (
    <>
      <Header
        pageTitle={`${courseDetail.title} Schedule | ABC Learning Center`}
      />
      <Layout>
        <div className="container mx-auto px-3 pt-28 lg:px-28">
          <h1 className="text-4xl font-bold text-black text-center mb-10">
            {courseDetail.title} Schedule
          </h1>
          <TableCourse schedule={courseDetail.schedule} />
        </div>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { course: "java" } },
    { params: { course: "python" } },
    { params: { course: "net" } },
    { params: { course: "msoffice" } },
  ];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const data: CourseDetails = {
    java: {
      title: "Java",
      schedule: [
        {
          id: 1,
          code: "Java01",
          module: "Introducing",
          class: "E-Learning",
          date: "1 June 2020",
          time: "09.00 AM - 11.00 AM",
          location: "Online",
        },
        {
          id: 2,
          code: "Java02",
          module: "Basic Java",
          class: "E-Learning",
          date: "2 June 2020",
          time: "09.00 AM - 11.00 AM",
          location: "Online",
        },
        {
          id: 3,
          code: "Java03",
          module: "Exercise Java",
          class: "Test",
          date: "3 June 2020",
          time: "09.00 AM - 09.30 AM",
          location: "Online",
        },
        {
          id: 4,
          code: "Java04",
          module: "Advanced Java",
          class: "E-Learning",
          date: "4 June 2020",
          time: "09.00 AM - 11.00 AM",
          location: "Online",
        },
        {
          id: 5,
          code: "Java05",
          module: "Exam Java",
          class: "Exam",
          date: "5 June 2020",
          time: "09.00 AM - 10.00 AM",
          location: "Online",
        },
      ],
    },
    python: {
      title: "Python",
      schedule: [
        {
          id: 1,
          code: "Py01",
          module: "Introducing",
          class: "E-Learning",
          date: "1 June 2020",
          time: "09.00 AM - 11.00 AM",
          location: "Online",
        },
        {
          id: 2,
          code: "Py02",
          module: "Basic Python",
          class: "E-Learning",
          date: "2 June 2020",
          time: "09.00 AM - 11.00 AM",
          location: "Online",
        },
        {
          id: 3,
          code: "Py03",
          module: "Exercise Python",
          class: "Test",
          date: "3 June 2020",
          time: "09.00 AM - 09.30 AM",
          location: "Online",
        },
        {
          id: 4,
          code: "Py04",
          module: "Advanced Python",
          class: "E-Learning",
          date: "4 June 2020",
          time: "09.00 AM - 11.00 AM",
          location: "Online",
        },
        {
          id: 5,
          code: "Py05",
          module: "Exam Python",
          class: "Exam",
          date: "5 June 2020",
          time: "09.00 AM - 10.00 AM",
          location: "Online",
        },
      ],
    },
    net: {
      title: ".NET",
      schedule: [
        {
          id: 1,
          code: "Net01",
          module: "Introducing",
          class: "E-Learning",
          date: "1 June 2020",
          time: "09.00 AM - 11.00 AM",
          location: "Online",
        },
        {
          id: 2,
          code: "Net02",
          module: "Basic .NET",
          class: "E-Learning",
          date: "2 June 2020",
          time: "09.00 AM - 11.00 AM",
          location: "Online",
        },
        {
          id: 3,
          code: "Net03",
          module: "Exercise .NET",
          class: "Test",
          date: "3 June 2020",
          time: "09.00 AM - 09.30 AM",
          location: "Online",
        },
        {
          id: 4,
          code: "Net04",
          module: "Advanced .NET",
          class: "E-Learning",
          date: "4 June 2020",
          time: "09.00 AM - 11.00 AM",
          location: "Online",
        },
        {
          id: 5,
          code: "Net05",
          module: "Exam .NET",
          class: "Exam",
          date: "5 June 2020",
          time: "09.00 AM - 10.00 AM",
          location: "Online",
        },
      ],
    },
    msoffice: {
      title: "Microsoft Office",
      schedule: [
        {
          id: 1,
          code: "Ms01",
          module: "Introducing",
          class: "E-Learning",
          date: "1 June 2020",
          time: "09.00 AM - 11.00 AM",
          location: "Online",
        },
        {
          id: 2,
          code: "Ms02",
          module: "Basic Microsoft Office",
          class: "E-Learning",
          date: "2 June 2020",
          time: "09.00 AM - 11.00 AM",
          location: "Online",
        },
        {
          id: 3,
          code: "Ms03",
          module: "Exercise Microsoft Office",
          class: "Test",
          date: "3 June 2020",
          time: "09.00 AM - 09.30 AM",
          location: "Online",
        },
        {
          id: 4,
          code: "Ms04",
          module: "Advanced Microsoft Office",
          class: "E-Learning",
          date: "4 June 2020",
          time: "09.00 AM - 11.00 AM",
          location: "Online",
        },
        {
          id: 5,
          code: "Ms05",
          module: "Exam Microsoft Office",
          class: "Exam",
          date: "5 June 2020",
          time: "09.00 AM - 10.00 AM",
          location: "Online",
        },
      ],
    },
  };

  if (!params || typeof params.course !== "string") {
    return { notFound: true };
  }

  const courseDetail = data[params.course];

  if (!courseDetail) {
    return { notFound: true };
  }

  return { props: { courseDetail } };
};

export default SchedulePage;
