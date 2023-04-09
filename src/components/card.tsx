import Image from "next/image";
import Button from "./button";
import Link from "next/link";

interface Props {
  imageUrl: string;
  alt: string;
  classNameImg?: string;
  name: string;
  position: string;
  detailPosition: string;
}

const Card: React.FC<Props> = ({
  imageUrl,
  alt,
  classNameImg,
  name,
  position,
  detailPosition,
}) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:drop-shadow-lg hover:duration-500 hover:ease-in-out">
      <div className="flex flex-col items-center p-10">
        <Image
          className={`${classNameImg} mb-3 rounded-full shadow-lg object-cover `}
          src={imageUrl}
          alt={alt}
          width={200}
          height={200}
        />
        <h5 className="mb-1 text-2xl font-bold text-black ">{name}</h5>
        <span className="text-base text-gray-500">{position}</span>
        <span className="text-base text-gray-500">{detailPosition}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a href="#">
            <Image
              src="/assets/icons/facebook.svg"
              alt={alt}
              width={40}
              height={40}
            />
          </a>
          <a href="#">
            <Image
              src="/assets/icons/instagram.svg"
              alt={alt}
              width={40}
              height={40}
            />
          </a>
          <a href="#">
            <Image
              src="/assets/icons/linkedin.svg"
              alt={alt}
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
