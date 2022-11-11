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
        text={` //ActivateUserWithRecoveryquestion()
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
        backgroundImage: "url('http://localhost:3000/bg.png')",
      }}
    >
      <h1> Activating the User With Recovery Question</h1>
      <button>Click here for Activating the user</button>
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


//WithRecoveryQuestion.js
export const WithRecoveryQuestion = {
  profile: {
    firstName: "Firstname",
    lastName: "Lastname",
    email: "Firstname@{{email-suffix}}",
    login: "Firstname@{{email-suffix}}",
  },
  credentials: {
    recovery_question: {
      question: "Who's a major player in the cowboy scene?",
      answer: "Annie Oakley",
    },
  },
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
