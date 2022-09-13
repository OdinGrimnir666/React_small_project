import react, { useState, Fragment, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./CreateUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const createUserHandler = (event) => {
    event.preventDefault();

    const inputUserName = nameInputRef.current.value;

    const inputUserAge = ageInputRef.current.value;

    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: "Некоректній ввод",
        message: "Єти поляне могут быть пустыми",
      });
      return;
    }
    if (+inputUserAge < 1) {
      setError({
        title: "Некоректній ввод",
        message: "Возраст должен быть больше 0",
      });
      return;
    }
    props.onCreateUser(inputUserName, inputUserAge);
    nameInputRef.current.value='';
    ageInputRef.current.value=''; 
  };

  const errorHandler = () => {
    debugger;
    setError(false);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <lable htmlFor="name">Имя</lable>
          <input id="name" type="text" ref={nameInputRef} />
          <lable htmlFor="age">Возраст</lable>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Добавить Пользователя</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default CreateUser;
