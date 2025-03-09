interface ButtonProps {
    setFunction: () => void;
    text: string;
}

const Button = ({ setFunction, text }: ButtonProps) => {
    return <button onClick={setFunction}>{text}</button>;
};

export default Button;