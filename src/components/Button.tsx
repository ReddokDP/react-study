interface ButtonProps {
  setFunction: (arg: number) => void;
  text: string;
}

const Button = ({ setFunction, text }: ButtonProps) => {
  const handleButtonClick = () => {
    setFunction(1);
  };
  return <button onClick={handleButtonClick}>{text}</button>;
};

export default Button;
