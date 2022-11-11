import React from "react";
import client from "../../Api/axios";

import { WithRecoveryQuestion } from "../../Api/WithRecoveryQuestion";

export default function UserWithRecoveryQuestion() {
  function handleClick() {
    client
      .post("/users?activate=false", WithRecoveryQuestion)
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
      <h1> Create User with recovery question</h1>
      <button>Click to register</button>
    </div>
  );
}
