import { useState } from "react";
import { Button } from "./Button";
import { nanoid, customAlphabet } from "nanoid";

interface User {
  id: number;
  name: string;
}

interface ListUserProps {
  listUserFromApp: User[];
}

export const ListUser = ({ listUserFromApp }: ListUserProps) => {
  const [users, setUsers] = useState(listUserFromApp);

  const nanoidDigits = customAlphabet("0123456789", 10);

  function addUserInList() {
    const idUser = nanoidDigits();
    const nameUser = nanoid(4);
    setUsers([...users, { id: Number(idUser), name: nameUser }]);
  }

  return (
    <div>
      {users.map(({ name, id }) => (
        <div key={id}>{name}</div>
      ))}
      <Button handleClick={addUserInList}>addUser</Button>
    </div>
  );
};
