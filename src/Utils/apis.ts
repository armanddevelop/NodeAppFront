const URL: string = "http://localhost:3001";

const filterNames = (users: object[], id: string) => {
  const user = users.filter((user: any) => {
    if (user._id !== id) return user.name;
  });
  return user;
};

export const getUsers = async () => {
  try {
    const result = await fetch(`${URL}/user`);
    if (result.status === 200) {
      const resp = await result.json();
      return resp;
    }
    return [];
  } catch (error) {
    console.error("this is the value of error ", error);
    return "Something go wrong try again later :(";
  }
};

export const getChats = async (userId: string) => {
  if (userId !== "") {
    try {
      const result = await fetch(`${URL}/chat/user/${userId}`);
      if (result.status === 200) {
        const resp = await result.json();
        const { body } = resp;
        console.log("esto vale body ", body);
        const names = body.map((item: any) => {
          console.log("Esto vale id del chat ", item._id);
          const users = item.users.map(({ name, _id }: any) => {
            return { name, _id };
          });
          return filterNames(users, userId);
        });
        return names;
      }
      return [];
    } catch (error) {
      console.error("this is the value of error ", error);
      return "Something go wrong try again later :(";
    }
  }
};
