import { Divider, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { User } from "../../interfaces/interfaces";

interface listItemsProps {
  name: string;
  id: string;
  setUserId: React.Dispatch<React.SetStateAction<User>>;
}

export const ListItems = (props: listItemsProps) => {
  const { name, id, setUserId } = props;

  const handleClick = (id: string) => {
    setUserId({
      id,
    });
  };
  return (
    <>
      <ListItem>
        <Link to={`/${id}`} onClick={() => handleClick(id)}>
          {name}
        </Link>
      </ListItem>
      <Divider />
    </>
  );
};
