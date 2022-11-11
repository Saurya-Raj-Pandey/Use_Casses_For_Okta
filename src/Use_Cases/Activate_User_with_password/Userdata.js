import React from "react";
import client from "../../Api/axios";
import withPassword from "../../Api/withPassword";

export default function ActivateUserWithPassword() {
  function handleClick() {
    client
      .post("/users?activate=true", withPassword)
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
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1> Activating the User with password</h1>
      <button>Click here to activate the user </button>
    </div>
  );
}
