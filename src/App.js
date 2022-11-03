import React, { useState } from 'react'; 

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";



function App() {
  const [usersList, setUsersList] = useState([]);

  const handleAddUser = (userName, userAge) => {
    setUsersList((prevState) => {
      return [...prevState, {id: Math.random().toString(),name: userName, age: userAge}];
    });
  }; 

  return (
    <div className="App">
      <AddUser onAddUser={handleAddUser} /> 
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
