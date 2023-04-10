import Image from "next/image";
import Link from "next/link";
import Button from "../button";

interface Props {
  imageUrl: string;
  alt: string;
  titleCourse: string;
  descCourse: string;
  priceCourse: number;
  ratingCourse: number;
  reviewCourse: number;
  urlCourse: string;
}

const CardCourse: React.FC<Props> = ({
  imageUrl,
  alt,
  titleCourse,
  descCourse,
  priceCourse,
  ratingCourse,
  reviewCourse,
  urlCourse,
}) => {
  return (
    <div className="border p-5 bg-white drop-shadow mt-10 lg:mt-0 rounded-lg hover:drop-shadow-lg hover:duration-500 hover:ease-in-out md:mr-5">
      <div className="flex flex-col items-center md:flex-row">
        <div className="h-1/2 md:w-1/4">
          <Image
            src={imageUrl}
            alt={alt}
            width={350}
            height={350}
            className="p-10 md:p-0"
          />
        </div>
        <div className="h-1/2 md:w-3/4 pl-6 text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{titleCourse}</h2>
          <p className="text-base">{descCourse}</p>
          <h2 className="text-2xl font-bold mb-2">${priceCourse}</h2>

          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-sm font-bold text-black">{ratingCourse}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium text-black underline hover:no-underline"
            >
              {reviewCourse} Reviews
            </a>
          </div>
          <Link href={urlCourse}>
            <Button type="button" className="mt-6 mb-10 md:mb-0">
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
