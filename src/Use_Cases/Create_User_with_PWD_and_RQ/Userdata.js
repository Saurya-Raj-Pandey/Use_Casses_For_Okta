import React from "react";
import client from "../../Api/axios";
import person from "../../Api/credentialsDetails";

export default function CreateUserWithPwdAndRq() {
  function handleClick() {
    client
      .post("/users?activate=false", person)
      .then((response) => response.text("User Activated"))
      .then((result) => console.log(result))
      .catch((error) => console.log("error: ", error));
    alert("User Created");
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
      <h1> Create User With Pwd And Rq</h1>
      <button>Click here for Creating the user</button>
    </div>
  );
}
