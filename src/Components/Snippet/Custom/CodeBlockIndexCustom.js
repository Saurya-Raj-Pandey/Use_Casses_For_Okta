import React from "react";
import { CopyBlock, atomOneLight } from "react-code-blocks";

const IndexCodeBlock = () => {
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
          //route ->Index.js
var express = require("express");
const { getOktaUser, createUser } = require("../service/api");
var router = express.Router();

// body -> {userId: 123}
router.post("/user", (req, res) => {
  let userId = req.body.userId;
  if (userId) {
    getOktaUser(userId)
      .then((resp) => {
        return res.status(200).json({ isError: false, message: resp });
      })
      .catch((error) => {
        return res.status(500).json({ isError: true, message: error });
      });
  } else {
    return res
      .status(500)
      .json({ isError: true, message: "parameter missing or not correct" });
  }
});

/*
@bodyParam =  {
    "firstName": "ab",
    "lastName": "ab",
    "email": "ab.ab@mailinator.com",
    "password": "Chitwan123",
    "question": "What is your best food?",
    "answer": "daal bhaat",
    "activate": false
}
*/
router.post("/createWithPasswordAndRq", (req, res) => {
  const bodyParam = req.body;
  if (isEmpty(bodyParam)) {
    let param = {
      profile: {
        firstName: bodyParam.firstName,
        lastName: bodyParam.lastName,
        email: bodyParam.email,
        login: bodyParam.email,
      },
      credentials: {
        password: { value: bodyParam.password },
        recovery_question: {
          question: bodyParam.question,
          answer: bodyParam.answer,
        },
      },
    };

    const activateStatus = bodyParam.activate;

    createUser(param, activateStatus)
      .then((resp) => {
        return res.status(200).json({ isError: false, message: resp });
      })
      .catch((error) => {
        return res.status(500).json({ isError: true, message: error });
      });
  } else {
    return res
      .status(500)
      .json({ isError: true, message: "parameter missing or not correct" });
  }
});

/*
@bodyParam =  {
    "firstName": "ab",
    "lastName": "ab",
    "email": "ab.ab@mailinator.com",
    "activate": true
}
*/
router.post("/createUserWithoutCredential", (req, res) => {
  const bodyParam = req.body;
  if (isEmpty(bodyParam)) {
    let param = {
      profile: {
        firstName: bodyParam.firstName,
        lastName: bodyParam.lastName,
        email: bodyParam.email,
        login: bodyParam.email,
      },
    };

    const activateStatus = bodyParam.activate;

    createUser(param, activateStatus)
      .then((resp) => {
        return res.status(200).json({ isError: false, message: resp });
      })
      .catch((error) => {
        return res.status(500).json({ isError: true, message: error });
      });
  } else {
    return res
      .status(500)
      .json({ isError: true, message: "parameter missing or not correct" });
  }
});

/*
@bodyParam =  {
    "firstName": "ab",
    "lastName": "ab",
    "email": "ab.ab@mailinator.com",
    "activate": true,
    "password": "Chitwan123"
}
*/
router.post("/createUserWithPassword", (req, res) => {
  const bodyParam = req.body;
  if (isEmpty(bodyParam)) {
    let param = {
      profile: {
        firstName: bodyParam.firstName,
        lastName: bodyParam.lastName,
        email: bodyParam.email,
        login: bodyParam.email,
      },
      credentials: {
        password: { value: bodyParam.password },
      },
    };

    const activateStatus = bodyParam.activate;

    createUser(param, activateStatus)
      .then((resp) => {
        return res.status(200).json({ isError: false, message: resp });
      })
      .catch((error) => {
        return res.status(500).json({ isError: true, message: error });
      });
  } else {
    return res
      .status(500)
      .json({ isError: true, message: "parameter missing or not correct" });
  }
});

/*
@bodyParam =  {
    "firstName": "ab",
    "lastName": "ab",
    "email": "ab.ab@mailinator.com",
    "activate": true,
    "question": "what is your best food",
    "answer": "daal bhaat"
}
*/
router.post("/createUserWithRecoveryQuestion", (req, res) => {
  const bodyParam = req.body;
  if (isEmpty(bodyParam)) {
    let param = {
      profile: {
        firstName: bodyParam.firstName,
        lastName: bodyParam.lastName,
        email: bodyParam.email,
        login: bodyParam.email,
      },
      credentials: {
        recovery_question: {
          question: bodyParam.question,
          answer: bodyParam.answer,
        },
      },
    };

    const activateStatus = bodyParam.activate;

    createUser(param, activateStatus)
      .then((resp) => {
        return res.status(200).json({ isError: false, message: resp });
      })
      .catch((error) => {
        return res.status(500).json({ isError: true, message: error });
      });
  } else {
    return res
      .status(500)
      .json({ isError: true, message: "parameter missing or not correct" });
  }
});

/*
@bodyParam =  {
    "firstName": "ab",
    "lastName": "ab",
    "email": "ab.ab@mailinator.com",
    "activate": true,
    "groupIds": ["123", "123"]
}
*/
router.post("/createUserInGroup", (req, res) => {
  const bodyParam = req.body;
  if (isEmpty(bodyParam)) {
    let param = {
      profile: {
        firstName: bodyParam.firstName,
        lastName: bodyParam.lastName,
        email: bodyParam.email,
        login: bodyParam.email,
      },
      groupIds: bodyParam.groupIds,
    };

    const activateStatus = bodyParam.activate;

    createUser(param, activateStatus)
      .then((resp) => {
        return res.status(200).json({ isError: false, message: resp });
      })
      .catch((error) => {
        return res.status(500).json({ isError: true, message: error });
      });
  } else {
    return res
      .status(500)
      .json({ isError: true, message: "parameter missing or not correct" });
  }
});

const isEmpty = (body) => {
  return Object.keys(body).length != 0;
};

module.exports = router;


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

export default IndexCodeBlock;
