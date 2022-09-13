import Card from "./Card";
import Button from "./Button";
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <Card className={styles.modal} onClick={props.onCloseModal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onCloseModal}>Закрыть</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
