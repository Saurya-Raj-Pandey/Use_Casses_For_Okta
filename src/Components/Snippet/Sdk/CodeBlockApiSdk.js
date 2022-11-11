import React from "react";
import { CopyBlock, atomOneLight } from "react-code-blocks";

const ApiCodeBlock = () => {
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
        text={` // service ->api.js
const okta = require("@okta/okta-sdk-nodejs");

const oktaClient = new okta.Client({
  orgUrl: process.env.OKTA_ORG_URL,
  token: process.env.OKTA_TOKEN,
});

const getOktaUser = (userId) => {
  return oktaClient.getUser(userId).then((response) => {
    return response;
  });
};

const createUser = (param, activateStatus) => {
  return oktaClient
    .createUser(param, { activate: activateStatus })
    .then((response) => {
      return response;
    });
};

const createUserWithoutCredential = (param) => {
  return oktaClient
    .createUser(param, { activate: false })
    .then((response) => {
      return response;
    });
}

const services = {
  getOktaUser,
  createUser,
};

module.exports = services;

  `}
        customStyle={{
          height: "800px",
          overflow: "scroll",
          background: "black",
        }}
        language={"javascript"}
        theme={atomOneLight}
        {...{ showLineNumbers, codeBlock }}
      />
    </div>
  );
};

export default ApiCodeBlock;
