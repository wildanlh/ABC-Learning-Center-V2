import CardCourse from "@/components/courses/card-course";
import Header from "@/components/header";
import Layout from "@/components/layout";
import React from "react";
import listCourse from "../../data/data.json";

interface ListCOurse {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviewers: number;
  image: string;
  url: string;
}

const course: ListCOurse[] = listCourse.course;

export default function Learn() {
  return (
    <>
      <Header pageTitle="Learn | ABC Learning Center" />
      <Layout>
        <div className="container mx-auto px-3 pt-28 lg:px-28">
          <h1 className="text-4xl font-bold text-black text-center">
            Learn Course
          </h1>
          <div className="mt-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 flex flex-col items-center lg:flex-row">
              {course.map((detail) => (
                <div key={detail.id}>
                  <CardCourse
                    imageUrl={detail.image}
                    alt={detail.id}
                    titleCourse={detail.title}
                    descCourse={detail.description}
                    priceCourse={detail.price}
                    ratingCourse={detail.rating}
                    reviewCourse={detail.reviewers}
                    urlCourse={detail.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
