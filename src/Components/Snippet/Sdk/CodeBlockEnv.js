import React from "react";
import { CopyBlock, atomOneLight } from "react-code-blocks";

export const EnvCodeBlock = () => {
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
        text={` // .env
OKTA_TOKEN = {OKTA_TOKEN}
OKTA_ORG_URL =https://dev-{YOUR TENANT URL}.okta.com/

  `}
        customStyle={{
          height: "400px",
          overflow: "scroll",
        }}
        language={"javascript"}
        theme={atomOneLight}
        {...{ showLineNumbers, codeBlock }}
      />
    </div>
  );
};
