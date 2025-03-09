import "./App.css";
import { useState } from "react";
import ButtonWithInput from "./components/ButtonWithInput.tsx";
import Button from "./components/Button.tsx";
import Count from "./components/Count.tsx";
import ListUser from "./components/ListUser.tsx";

const list = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Robert" },
  { id: 4, name: "Many" },
  { id: 5, name: "Viktor" },
];

const App = () => {
  const [count, setCount] = useState(0);

  const valueFromInput = (valueFromInput: number) => {
    setCount(count + valueFromInput);
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
      <ButtonWithInput valueFromInput={valueFromInput} />
      <Count count={count} />
      <Button text={"+1"} setFunction={valueFromInput} />
      <Button text={"-1"} setFunction={minusCount} />
      <ListUser ListUserProps={list} />
    </div>
  );
};

export default App;

//Task list
/*
Моя задача сделать этот инпут контролируемым из инпута по нажатию кнопки получаю value и + к count через button,
вынести инпут + баттон в один компонент и соотв. сделать интерфейс, если я буду добавлять слова, то на экране должна появиться
надпись под компонентами "невалидное число", в любом изменении инпута надпись "невалидное число" должна пропасть
*/

/*
Компонент списка вынести в отдельный компонент, сам список передавать пропсом
добавляется пользователя через кнопку с рандомным id и рандомное имя через nanoid
*/
