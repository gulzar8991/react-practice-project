import React from "react";

const AddUser = (props) => {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" className="username" />
    </form>
  );
};

export default AddUser;
