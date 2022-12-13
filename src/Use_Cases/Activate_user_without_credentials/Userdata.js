import React from "react";
import client from "../../Api/axios";
import withoutCredential from "../../Api/withoutCredentials";

export default function ActivateUserWithoutCredentials() {
  function handleClick() {
    client
      .post("/users?activate=true", withoutCredential)
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
      <h1> Activating User Without Credential</h1>
      <button>Click here to activate the user</button>
    </div>
  );
}
