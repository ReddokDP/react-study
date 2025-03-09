import "./App.css";
import React, { useState } from "react";
import ButtonWithInput from "./components/ButtonWithInput.tsx";
import Button from "./components/Button.tsx";
import Count from "./components/Count.tsx";
import {nanoid} from "nanoid";

const list = [
  { id : 1, name: "Alice" },
  { id : 2, name: "Alex" },
  { id : 3, name: "Robert" },
  { id : 4, name: "Many" },
  { id : 5, name: "Wero" },
]

const App = () => {
  const [count, setCount] = useState(0);

  const sumCountAndInputValue = (valueFromInput: number) => {
    setCount(count + valueFromInput);
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <ButtonWithInput valueFromInput={sumCountAndInputValue} />
      <Count count={count} />
      <Button text={"+1"} setFunction={plusCount} />
      <Button text={"-1"} setFunction={minusCount} />

      {list.map(({name, id}) => (
        <div key={id}>{name}</div>
      ))}
      <Button text={'add user'}/>
    </div>
  );
};

export default App;

// Моя задача сделать этот инпут контролируемым из инпута по нажатию кнопки получаю value и + к count через button,
// вынести инпут + баттон в один компонент и соотв. сделать интерфейс, если я буду добавлять слова, то на экране должна появиться
// надпись под компонентами "невалидное число", в любом изменении инпута надпись "невалидное число" должна пропасть
// */

/*
Компонент списка вынести в отдельный компонент, сам список передавать пропсом
добавляется пользователь с рандомным id и рандомное имя через nanoid

*/