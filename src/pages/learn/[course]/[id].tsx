import TableCourse from "@/components/courses/table-course";
import Layout from "@/components/layout";
import React from "react";
import courseSchedule from "../../../data/data.json";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Header from "@/components/header";

interface CourseDetail {
  id: string;
  title: string;
  schedule: string[];
}

type Props = {
  courseDetail: CourseDetail;
};

const SchedulePage: React.FC<Props> = ({ courseDetail }) => {
  return (
    <>
      <Header
        pageTitle={`${courseDetail.title} Schedule | ABC Learning Center`}
      />
      <Layout>
        <div className="container mx-auto px-28 pt-28">
          <h1 className="text-4xl font-bold text-black text-center mb-10">
            ${courseDetail.title} Schedule
          </h1>
          {/* <TableCourse schedule={} /> */}
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const courseId = context.params?.courseSchedule as string;
  const courseDetail = courseSchedule.courseDetail.find(
    (c) => c.id === courseId
  );

  if (!courseDetail) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      courseDetail,
    },
  };
};

export default SchedulePage;
