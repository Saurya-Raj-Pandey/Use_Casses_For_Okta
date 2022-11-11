import React from "react";
import client from "../../Api/axios";
import withPassword from "../../Api/withPassword";

export default function UserWithPassword() {
  function handleClick() {
    client
      .post("/users?activate=false", withPassword)
      .then((response) => response.text("User Activated"))
      .then((result) => console.log(result))
      .catch((error) => console.log("error: ", error));
  }
  return (
    <div
      onClick={handleClick}
      style={{
        textAlign: "center",
        padding: "200px",
        width: "1250px",
        border: "10px solid gray",
        borderRadius: "90px",
        backgroundImage: "url('http://localhost:3000/bg.png')",
      }}
    >
      <h1> Create User with Password</h1>
      <button>Click here to register</button>
    </div>
  );
}
