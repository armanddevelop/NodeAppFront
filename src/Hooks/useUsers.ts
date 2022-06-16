import { useEffect, useState } from "react";
import { getUsers } from "../Utils/apis";

export const useUsers = () => {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    getUsers()
      .then(({ body, error }) => {
        if (error === "") {
          setUsersList(body);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return {
    usersList,
  };
};
