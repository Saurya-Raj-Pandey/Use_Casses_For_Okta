import React from "react";
import client from "../../Api/axios";
import withoutCredential from "../../Api/withoutCredentials";

export default function UserWithNonDefault() {
  function handleClick() {
    client
      .post("/users?activate=false", withoutCredential)
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
      <h1> Creating user with non default user type</h1>
      <button>Click here to register </button>
    </div>
  );
}