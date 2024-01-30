// import classes from './App.css';
import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUsersList(prevList => 
      [...prevList, {name: uName, age: uAge, id: Math.random().toString()}]
    );
  }


  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;