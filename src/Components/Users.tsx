import { useUsers } from "../Hooks/useUsers";

export const Users = () => {
  const { usersList } = useUsers();

  const handleClick = (id: string) => {
    console.log("esto vale id ", id);
  };

  const ListItems = (props: any) => {
    const { name, id } = props;
    return (
      <li value={id} onClick={() => handleClick(id)}>
        {name}
      </li>
    );
  };

  return (
    <ul>
      <h1>Users</h1>

      {usersList.map(({ name, _id: id }, idx) => {
        return <ListItems name={name} id={id} key={idx} />;
      })}
    </ul>
  );
};
