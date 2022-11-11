import React from "react";
import { CopyBlock, atomOneLight } from "react-code-blocks";

const CodeBlock = () => {
  const showLineNumbers = ("showLineNumbers", true);
  const codeBlock = ("codeBlock", true);
  return (
    <div
      style={{
        fontFamily: "IBM Plex Mono",
        textAlign: "left",
        fontSize: "20px",
        alignItems: "center",
        overflowX: "auto",
        flexWrap: "wrap",
      }}
    >
      <CopyBlock
        text={` //ActivateUserWithPassword()
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
      }}
    >
      <h1> Activating the User with password</h1>
      <button>Click here to activate the user </button>
    </div>
  );
}



//client(axios.js)
import axios from "axios";
const client = axios.create({
  baseURL: "https://dev-{{Your_Tenant}}.okta.com/api/v1",
  headers: {
    Authorization: "SSWS {Token}",
  },
});

export default client;


//withPassword.js
const withPassword = {
  profile: {
    firstName: "Firstname",
    lastName: "Lastname",
    email: "Firstname.Lastname@malinator.com",
    login: "Firstname.Lastname@malinator.com",
  },
  credentials: {
    password: {
      value: "TestmeNow@123",
    },
  },
};

export default withPassword;


`}
        customStyle={{
          height: "800px",
          overflow: "scroll",
        }}
        language={"javascript"}
        theme={atomOneLight}
        {...{ showLineNumbers, codeBlock }}
      />
    </div>
  );
};

export default CodeBlock;
