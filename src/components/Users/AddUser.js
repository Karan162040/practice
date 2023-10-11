import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const inputName = useRef();
  const inputAge = useRef();
  const inputcollege = useRef();
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = inputName.current.value;
    const enteredAge = inputAge.current.value;
    const enteredCollege = inputcollege.current.value;
    if (enteredAge.length === 0 || enteredName.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid username and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( >0).",
      });
      return;
    }
    props.onAddUserHandler(enteredName, enteredAge, enteredCollege);

    inputName.current.value = "";
    inputAge.current.value = "";
    inputcollege.current.value = "";
  };

  const onConfirmHandler = () => {
    setError();
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onConfirmHandler}
        />
      )}

      <Card cssStyle="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={inputName} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={inputAge} />
          <label htmlFor="college">College</label>
          <input id="college" type="text" ref={inputcollege} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
