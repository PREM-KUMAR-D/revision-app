import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";


function App() {

  const [usersList,setUsersList]= useState([]);


  const addUserHandler =(uName,uAge)=>{
      setUsersList((prev)=>{

        let updated = [{name:uName , age:uAge , id: Math.random().toString()},...prev];
        return updated;

      })
  }

  return (
    <div >
      
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
