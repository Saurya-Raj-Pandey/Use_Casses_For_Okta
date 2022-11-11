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
        text={` //UserInGroup()
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



//client(axios.js)
import axios from "axios";
const client = axios.create({
  baseURL: "https://dev-{{Your_Tenant}}.okta.com/api/v1",
  headers: {
    Authorization: "SSWS {Token}",
  },
});

export default client;


//(UserinGroup).js)
export const UserinGroup = {
  profile: {
    firstName: "FirstName",
    lastName: "Lastname",
    email: "Firstname.Lastname@malinator.com",
    login: "Firstname.Lastname@malinator.com",
  },
  groupIds: ["{groupId}"],
};


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
