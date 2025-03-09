import React, { useState } from 'react';
import Button from "./Button.tsx";

interface ButtonWithInputProps {
    valueFromInput: (value:number) => void;
}

const ButtonWithInput = ({ valueFromInput }:ButtonWithInputProps) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState<string | null>(null);

    const setValueInput = (event) => {
        setInputValue(event.target.value);
        setError(null);
    };

    const getValueFromInput = () => {
        if (isNaN(+inputValue)) {
            setError('Невалидное число');
            console.log(error)
        } else {
            valueFromInput(+inputValue);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={setValueInput}
                placeholder="Введите число"
            />
            <Button text={'Add'} setFunction={getValueFromInput} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ButtonWithInput;
