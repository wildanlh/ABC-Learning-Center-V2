import Image from "next/image";
import Link from "next/link";
import Button from "../button";

interface Props {
  imageUrl: string;
  alt: string;
  classNameImg?: string;
  scheduleCourse: string;
  willGet: string[];
}

const HeroCourse: React.FC<Props> = ({
  imageUrl,
  alt,
  classNameImg,
  scheduleCourse,
  willGet,
}) => {
  return (
    <div className="container mx-auto px-28">
      <div className="flex items-center">
        <div className="w-1/4">
          <Image
            src={imageUrl}
            alt={alt}
            width={350}
            height={350}
            className={`${classNameImg} p-5`}
          />
        </div>
        <div className="w-3/4 pl-6 text-black">
          <h2 className="text-2xl font-bold mb-2">What will you get?</h2>

          <ol className="pl-5 mt-2 space-y-1 list-decimal">
            {willGet.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>

          <Link href={scheduleCourse}>
            <Button type="button" className="mt-6">
              See Schedule
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCourse;
