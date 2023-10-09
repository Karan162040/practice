import React from "react";
import "./UsersList.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card cssStyle="users">
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.username} ({user.age}) Years old
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
