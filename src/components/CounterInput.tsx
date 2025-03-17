import { useState, ChangeEvent } from "react";
import { Button } from "./Button.tsx";

interface ButtonWithInputProps {
  valueFromInput: (value: number) => void;
}

export const CounterInput = ({ valueFromInput }: ButtonWithInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const setValueInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setError(null);
  };

  const getValueFromInput = () => {
    if (isNaN(Number(inputValue))) {
      setError("Невалидное число");
      return;
    }
    valueFromInput(Number(inputValue));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={setValueInput}
        placeholder="Введите число"
      />
      <Button children="Add" handleClick={getValueFromInput} />
      {error && <p className="error-novalid">{error}</p>}
    </div>
  );
};
