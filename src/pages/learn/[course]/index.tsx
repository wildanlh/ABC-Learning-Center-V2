import HeroCourse from "@/components/courses/hero-course";
import TabsCourse from "@/components/courses/tabs-course";
import Header from "@/components/header";
import Layout from "@/components/layout";
import React from "react";
import course from "../../../data/data.json";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";

interface Instructor {
  name: string;
  badge: string;
  image: string;
  desc: string;
  video: number;
  student: number;
  rating: number;
}

interface Feedback {
  id: number;
  name: string;
  rate: number;
  desc: string;
  image: string;
}

interface CourseDetail {
  id: string;
  title: string;
  willGet: string[];
  intro: string;
  instructor: Instructor[];
  content: string[];
  requirements: string[];
  feedback: Feedback[];
  image: string;
  urlSchedule: string;
}

type Props = {
  courseDetail: CourseDetail;
};

const tabs = [
  { id: "tab1", label: "Instructors" },
  { id: "tab2", label: "What we will learn" },
  { id: "tab3", label: "Requirements" },
  { id: "tab4", label: "Feedback" },
];

const CoursePage: React.FC<Props> = ({ courseDetail }) => {
  const renderContent = (activeTab: string) => {
    switch (activeTab) {
      case "tab1":
        return (
          <div>
            {courseDetail.instructor.map((inst) => (
              <div className="flex items-center mt-6 space-x-3" key={inst.name}>
                <Image
                  className="w-48 h-48 rounded-full object-cover"
                  src={inst.image}
                  alt={inst.name}
                  width={300}
                  height={300}
                />
                <div>
                  <div className="flex items-center divide-x-2 divide-gray-300 mb-2">
                    <p className="text-3xl pr-3 font-bold text-black">
                      {inst.name}
                    </p>
                    <span className="px-3">
                      <Image
                        src="/assets/icons/badge.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="text-center"
                      />
                      {inst.badge}
                    </span>

                    <span className="px-3">
                      <Image
                        src="/assets/icons/play.svg"
                        alt=""
                        width={24}
                        height={24}
                      />
                      {inst.video} Videos
                    </span>
                    <span className="px-3">
                      <Image
                        src="/assets/icons/account.svg"
                        alt=""
                        width={24}
                        height={24}
                      />
                      {inst.student} Students
                    </span>
                    <span className="px-3">
                      <Image
                        src="/assets/icons/star-shape.svg"
                        alt=""
                        width={24}
                        height={24}
                      />
                      {inst.rating} Rating
                    </span>
                  </div>
                  <div className="w-3/4">
                    <span>{inst.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "tab2":
        return (
          <div>
            <h1 className="text-xl font-bold text-black mb-2">
              What is {courseDetail.title}?
            </h1>
            <ul className="pl-5 mt-2 space-y-1 list-decimal">
              {courseDetail.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        );
      case "tab3":
        return (
          <div>
            <h1 className="text-xl font-bold text-black mb-2">
              What requirements you need?
            </h1>
            <ul className="pl-5 mt-2 space-y-1 list-decimal">
              {courseDetail.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        );
      case "tab4":
        return (
          <div>
            <h1 className="text-xl font-bold text-black mb-5">
              Reviews from students
            </h1>
            {courseDetail.feedback.map((fb) => (
              <figure className="max-w-screen-md" key={fb.id}>
                <hr className="my-5" />
                <figcaption className="flex items-center mt-6 space-x-3">
                  <Image
                    className="w-14 h-14 rounded-full"
                    src={fb.image}
                    alt={fb.name}
                    width={24}
                    height={24}
                  />
                  <div className="flex items-center divide-x-2 divide-gray-300">
                    <p className="pr-3 font-bold text-black">{fb.name}</p>
                  </div>
                </figcaption>
                <div className="flex items-center mb-4 text-yellow-300">
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <blockquote>
                  <p className="text-base text-black">{fb.desc}</p>
                </blockquote>
              </figure>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header
        pageTitle={`${courseDetail.title} Course | ABC Learning Center`}
      />
      <Layout>
        <div className="container mx-auto px-28 pt-28">
          <h1 className="text-4xl font-bold text-black text-center">
            {courseDetail.title} Course
          </h1>
          <div className="mt-10">
            <HeroCourse
              imageUrl={courseDetail.image}
              alt={courseDetail.title}
              scheduleCourse={courseDetail.urlSchedule}
              willGet={courseDetail.willGet}
            />
          </div>
          <div className="mt-10">
            <div className="bg-white drop-shadow-lg p-10 rounded-lg border">
              <div className="mb-5">
                <h1 className="text-3xl font-bold text-black text-center mb-2">
                  What is {courseDetail.title}?
                </h1>
                <p className="text-base text-justify">{courseDetail.intro}</p>
              </div>
              <TabsCourse
                tabs={tabs}
                onTabChange={(tab) => {
                  console.log("Active tab:", tab);
                }}
                renderContent={renderContent}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const courseId = context.params?.course as string;
  const courseDetail = course.courseDetail.find((c) => c.id === courseId);

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

export default CoursePage;
