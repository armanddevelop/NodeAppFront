import { BrowserRouter as Router } from "react-router-dom";
import { List } from "@mui/material";
import { useUsers } from "../Hooks/useUsers";
import { ListItems } from "./userList/ListItems";
import { User } from "../interfaces/interfaces";
interface UserProps {
  setUserId: React.Dispatch<React.SetStateAction<User>>;
}
export const Users = (props: UserProps) => {
  const { usersList } = useUsers();
  const { setUserId } = props;
  return (
    <Router>
      <List>
        <h1>Users</h1>
        {usersList.map(({ name, _id: id }, idx) => {
          return (
            <ListItems name={name} id={id} key={idx} setUserId={setUserId} />
          );
        })}
      </List>
    </Router>
  );
};
