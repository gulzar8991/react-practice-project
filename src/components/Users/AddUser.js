import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" className="username" />
      <label htmlFor="age">Age (Year)</label>
      <input type="number" id="age" className="username" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
