const URL: string = "http://localhost:3001";

export const getUsers = async () => {
  try {
    const result = await fetch(`${URL}/user`);
    if (result.status === 200) {
      const resp = await result.json();
      return resp;
    }
  } catch (error) {
    console.error("this is the value of error ", error);
    return "Something go wrong try again later :(";
  }
};
