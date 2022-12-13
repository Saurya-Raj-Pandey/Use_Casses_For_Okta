import React from "react";
import client from "../../Api/axios";

import { WithRecoveryQuestion } from "../../Api/WithRecoveryQuestion";

export default function ActivateUserWithRecoveryquestion() {
  function handleClick() {
    client
      .post("/users?activate=true", WithRecoveryQuestion)
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
      }}
    >
      <h1> Activating the User With Recovery Question</h1>
      <button>Click here for Activating the user</button>
    </div>
  );
}
