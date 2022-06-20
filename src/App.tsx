import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Users, Chat } from "./Components";
import { View, User } from "./interfaces/interfaces";

const App = () => {
  const [view, setView] = useState<View>({
    chat: false,
  });
  const [userId, setUserID] = useState<User>({
    id: "",
  });
  return (
    <Container>
      <div className="App">
        <Box>
          <Users setUserId={setUserID} />
          <Chat userId={userId} />
        </Box>
      </div>
    </Container>
  );
};

export default App;
