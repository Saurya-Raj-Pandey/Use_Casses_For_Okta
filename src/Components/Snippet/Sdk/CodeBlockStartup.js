import React from "react";
import { CopyBlock, atomOneLight } from "react-code-blocks";

const StartupCodeBlock = () => {
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
        text={`
          //Index.js
require("dotenv/config");
var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
var session = require("express-session");
var cors = require("cors");
var indexRouter = require("./route/index");

const sess = {
  secret: "someting-very-secret",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: false },
};

const corsOptions = {
  origin: ["http://localhost:9000"],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session(sess));
app.use(cors(corsOptions));

app.use("/api", indexRouter);

app.listen(3000, () => {
  console.log("Server running in 3000");
});

  `}
        customStyle={{
          height: "800px",
          overflow: "scroll",
          backgroundcolor: "black",
        }}
        language={"javascript"}
        theme={atomOneLight}
        {...{ showLineNumbers, codeBlock }}
      />
    </div>
  );
};

export default StartupCodeBlock;
