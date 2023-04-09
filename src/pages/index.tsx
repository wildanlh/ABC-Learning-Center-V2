import CardCourse from "@/components/courses/card-course";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import listCourse from "../data/data.json";

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

export default function Home() {
  return (
    <>
      <Header pageTitle="ABC Learning Center" />
      <Layout>
        <Hero />
        <div className="container mx-auto px-28 py-28">
          <div className="grid grid-cols-2 gap-10">
            {course.slice(0, 2).map((detail) => (
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
      </Layout>
    </>
  );
}
