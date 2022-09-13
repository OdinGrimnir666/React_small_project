import react, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./CreateUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error,setError] = useState();

  const createUserHandler = (event) => {
    event.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Некоректній ввод",
        message: 'Єти поляне могут быть пустыми'
      })
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Некоректній ввод",
        message: 'Возраст должен быть больше 0'
      })
      return;
    }
    props.onCreateUser(inputName, inputAge);
    setInputName("");
    setInputAge("");
  };
  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const errorHandler = () =>{
    debugger
    setError(false);
  }

  return (
    <div>
      {error && <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message} />}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <lable htmlFor="name">Имя</lable>
          <input
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName}
          />
          <lable htmlFor="age">Возраст</lable>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={inputAge}
          />
          <Button type="submit">Добавить Пользователя</Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateUser;
