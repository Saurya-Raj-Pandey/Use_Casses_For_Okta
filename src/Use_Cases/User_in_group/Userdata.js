import React from "react";
import client from "../../Api/axios";
import { UserinGroup } from "../../Api/UserInGroup";

export default function UserInGroup() {
  function handleClick() {
    client
      .post("/users?activate=false", UserinGroup)
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
      <h1> Enrolling the user into Group</h1>
      <button>Click here for Enroll the user into the group </button>
    </div>
  );
}
