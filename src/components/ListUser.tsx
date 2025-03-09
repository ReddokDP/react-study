import { useState } from "react";
import Button from "./Button";
import { nanoid, customAlphabet } from "nanoid";

interface UserProps {
  id: number;
  name: string;
}

interface ListUserProps {
  ListUserProps: UserProps[];
}

const ListUser = ({ ListUserProps }: ListUserProps) => {
  const [user, setUser] = useState(ListUserProps);

  const nanoidDigits = customAlphabet('0123456789', 10);

  function addUserInList() {
    const idUser = nanoidDigits();
    const nameUser = nanoid(4);
    setUser([...user, { id: +idUser, name: nameUser }]);
  }

  return (
    <div>
      {user.map(({ name, id }) => (
        <div key={id}>{name}</div>
      ))}
      <Button text={"addUser"} setFunction={addUserInList} />
    </div>
  );
};

export default ListUser;
