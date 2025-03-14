import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: (arg: number) => void;
}
export const Button = ({ children, handleClick, ...rest }: ButtonProps) => {
  const handleButtonClick = () => {
    handleClick(1);
  };
  return (
    <button onClick={handleButtonClick} {...rest}>
      {children}
    </button>
  );
};
