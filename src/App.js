import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersData, setUsersData] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersData((prevState) => {
      return [
        ...prevState,
        { username: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUserHandler={addUserHandler} />
      <UsersList users={usersData} />
    </div>
  );
}

export default App;
