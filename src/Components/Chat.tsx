import { User, View } from "../interfaces/interfaces";
import { useChat } from "../Hooks/useChats";

interface chatProps {
  setView?: React.Dispatch<React.SetStateAction<View>>;
  userId: User;
}

export const Chat = (props: chatProps) => {
  const { userId } = props;
  const { chats } = useChat({ userId });
  return (
    <div>
      <>
        <h1>Chats</h1>
        <ul>
          {chats.map((items: object[], idx: number) => {
            const names = items.map(({ name }: any) => {
              return name;
            });
            return <li key={idx}>{names} </li>;
          })}
        </ul>
      </>
    </div>
  );
};
