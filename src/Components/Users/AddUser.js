import React from "react";

const AddUser = () => {
  const addUserHandler = (event) => {
    console.log(event.target.username.value);
    console.log(event.target.age.value);
 

  };

  return (
    <form onSubmit={addUserHandler}>
        <div>
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" name="username"></input>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age"></input>
        </div>

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
