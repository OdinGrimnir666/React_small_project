import Card from "../UI/Card";
import style from './UserList.module.css'

const Userlist = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((users) => (
          <li key={users.id}>
            {users.name} - {users.age} лет
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Userlist;
