import React from "react";
import { CopyBlock, atomOneLight } from "react-code-blocks";
const userId = "${userId}";
const activateStatus = "${activateStatus}";

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
        text={`//service-api.js
const axios = require("axios");
const client = axios.create({
  baseURL: process.env.OKTA_ORG_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: SSWS process.env.OKTA_ORG_URL,
  },
});
client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    throw error;
  }
);

const getOktaUser = (userId) => {
  return client.get(/api/v1/users/${userId}).then((response) => {
    return response;
  });
};

const createUser = (param, activateStatus) => {
  return client
    .post(/api/v1/users?activate=${activateStatus}, param)
    .then((response) => {
      return response;
    });
};

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
