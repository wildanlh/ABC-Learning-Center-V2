import Image from "next/image";

interface Props {
  children: React.ReactNode;
  iconUrl: string;
  icon: string;
}

const ListContact: React.FC<Props> = ({ iconUrl, icon, children }) => {
  return (
    <>
      <div className="flex items-center hover:cursor-pointer hover:underline mb-3">
        <Image src={iconUrl} alt={icon} width={24} height={24} />
        <p className="text-blue-600 ml-2">{children}</p>
      </div>
    </>
  );
};

export default ListContact;
