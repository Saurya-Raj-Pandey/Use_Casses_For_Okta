import React from "react";
import client from "../../Api/axios";
import person from "../../Api/credentialsDetails";

export default function ActiveWithPwdAndRQ() {
  const handleClick = () => {
    client
      .post("/users?activate=true", person)
      .then((response) => response.text("User Activated"))
      .then((result) => console.log(result))
      .catch((error) => console.log("error: ", error));
  };
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
      <h1>Activating with PWD and RQ</h1>
      <button>Click here for Activating the user</button>
    </div>
  );
}
