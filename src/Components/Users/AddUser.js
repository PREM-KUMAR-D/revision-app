import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = (props) => {

  const [userName, setUserName] = useState("");

  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const nameHandler = (event) => {
    setUserName(event.target.value);
  }

  const ageHandler = (event) => {
    setAge(event.target.value)
  };


  const addUserHandler = (event) => {
    event.preventDefault();
    if(userName.trim().length === 0 || age.trim().length === 0){
      setError({message: "Please enter a valid username and age (non empty values)", title:"Invalid Input"})
      return; 
    }
    if(+age<1){
      setError({message: "Please enter a valid  age (non empty values)", title:"Invalid Input"})
      return ;
    }


    props.onAddUser(userName, age);

    setUserName("");
    setAge("");
  };

  const errorHandler = ()=>{
    setError(null);
  };


  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={nameHandler} value={userName} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number"
            onChange={ageHandler} value={age} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>


  );
};

export default AddUser;