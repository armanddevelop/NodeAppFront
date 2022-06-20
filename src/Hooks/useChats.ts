import { useState, useEffect } from "react";
import { User } from "../interfaces/interfaces";
import { getChats } from "../Utils/apis";

interface argumentsChat {
  userId: User;
}
export const useChat = ({ userId }: argumentsChat) => {
  const [chats, setChats] = useState<any[]>([]);
  useEffect(() => {
    getChats(userId.id)
      .then((data) => {
        if (data) {
          setChats(data);
        }
      })
      .catch((err) => console.error("This is the error ", err));
  }, [userId]);
  return { chats };
};
