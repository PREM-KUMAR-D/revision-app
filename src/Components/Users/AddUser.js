import React,{useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = () => {

  const [userName, setUserName] = useState("");

  const [age, setAge] = useState("");

  const nameHandler = (event) => {
    setUserName(event.target.value); 
  }

  const ageHandler = (event) => {
    setAge(event.target.value)
  };


  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(userName,age);
    
    setUserName("");
    setAge("");
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={nameHandler} value={userName} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number"
          onChange={ageHandler} value={age}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;