interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, type, className, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} text-white py-2 px-6 border bg-blue-600 border-blue-700 rounded-lg font-bold hover:bg-blue-500 hover:duration-300 hover:ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
