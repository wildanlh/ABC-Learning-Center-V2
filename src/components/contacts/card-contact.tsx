interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const CardContact: React.FC<Props> = ({ children, className, title }) => {
  return (
    <div
      className={`${className} w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:drop-shadow-lg hover:duration-500 hover:ease-in-out p-5`}
    >
      <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
      {children}
    </div>
  );
};

export default CardContact;
