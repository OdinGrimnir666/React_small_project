import react, { useState ,Fragment} from "react";
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
    <Fragment>
      <CreateUser onCreateUser={createUserHandler} />
      <Userlist users={userList} />
    </Fragment>
  );
};

export default App;
