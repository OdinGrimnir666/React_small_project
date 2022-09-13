import react, { useState } from "react";
import CreateUser from "./components/Users/CreateUser";
import Userlist from "./components/Users/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const createUserHandler = (name, age) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: name, age: age, id: Math.random().toString()}];
    });
  };
  return (
    <div>
      <CreateUser onCreateUser={createUserHandler} />
      <Userlist users={userList} />
    </div>
  );
};

export default App;
