import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const inputNameRef = useRef();
  const inputAgeRef = useRef();
  const inputCollegeRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = inputNameRef.current.value;
  const enteredUserAge = inputAgeRef.current.value;
  const enteredCollege = inputCollegeRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredCollege.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name, age and college (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge, enteredCollege);
    inputNameRef.current.value = '';
    inputAgeRef.current.value = '';
    inputCollegeRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            ref={inputNameRef}
          />
          <label htmlFor="age">Age (Years):</label>
          <input
            id="age"
            type="number"
            ref={inputAgeRef}
          />
          <label htmlFor="college">College Name:</label>
          <input
            id="college"
            type="text"
            ref={inputCollegeRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
