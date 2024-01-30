import React, {useState} from "react";
import classes from "./AddUser.module.css";
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  }

  const addUserHandler = event => {
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
        setError({
            title: "Invalid Input",
            message: "Please enter valid input(non-empty values)."
        });
        return;
    }
    if(+enteredAge < 1 ){
        setError({
            title: "Invalid Age",
            message: "Please enter valid age(non-negative values)."
        });
        return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Username</label>
        <input type="text" id="name" value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (in Years)</label>
        <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
