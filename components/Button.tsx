type ButtonProps = {
  type: "button" | "submit";
  title: string;
};

export const Button = ({ type, title }: ButtonProps) => {
  return (
    <button type={type} className="flexCenter signInBtn">
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};
