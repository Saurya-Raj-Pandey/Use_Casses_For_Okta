import React from "react";
import "./index.css";
function Custom() {
  return (
    <>
      <div className="Text">
        <br></br>
        <p>
          <h4>
            Here Inside the <b>Custom</b> file we have <b>route</b> and{" "}
            <b>service</b> which plays most of the role and we have <b>.env</b>{" "}
            for the information of the secret key in the api.js
          </h4>
        </p>

        <ul>
          <hr></hr> <br></br>
          <h4>
            <u>
              For <b>(Route->index.js)</b>
            </u>
          </h4>
          <li>
            Here we have imported the<b> express</b> as a package for the use in
            the program.
          </li>
          <li>
            Now we have imported the file from the{" "}
            <b>api.js which is inside the service(getoktaUser,creteUser)</b> and
            now we have also imported the <b>router</b> which helps in routing
            the api to the particular route.
          </li>
          <li>
            For every use cases there we have used <b>post method</b> and for
            every file we have different details according to the need of the
            Use cases and here the details we have called as <b>bodyParam</b>{" "}
            and it has details
            <h4>
              {" "}
              ( As you can see in the button above <b>Route->index.js</b>)
            </h4>
          </li>
          <h3> let us look at the example :</h3>
          <h5>
            {" "}
            as for the <b>"/createWithPasswordAndRq</b>
            <br></br>
            the requirement is Profile(firstName,lastName,email,login) and for
            the Credentials it has{" "}
            <b>
              {" "}
              (password and under password we have the recovery question with
              question and answer)
            </b>
          </h5>
        </ul>
        <br></br>
        <hr></hr>
        <ul>
          <h4>
            <u>
              For<b>(service->api.js)</b>
            </u>
          </h4>
          <li>
            Here we have imported the <b>axios package</b> which helps to run in
            the browser and node.js with the same codebase
          </li>
          <li>
            Here we have the <b>const client </b> which we have used for the
            axios
            <b>
              (baseUrl and Authorization )from the .env file which has value of
              it.
            </b>
            and for the header we the <b>Accept </b> which accept the json
            application
          </li>
          <li>
            The value of the{" "}
            <b>(getoktaUser,createUser,createUserWithoutCredential)</b> has been
            exported in the (route->index.js)
          </li>
          <h4>
            {" "}
            ( As you can see in the button above <b>service->api.js</b>)
          </h4>
        </ul>
        <hr></hr>

        <ul>
          <h4>
            <u>
              For<b>.env</b>
            </u>
          </h4>
          <li>
            In the .env file we have <b>(OKTA_TOKEN,OKTA_ORG_URL)</b>
          </li>
          <h4>
            (As you can see in the button above <b>.env</b>)
          </h4>
        </ul>
        <hr></hr>
        <ul>
          <h4>
            <u>
              For<b>index.js</b>
            </u>
          </h4>
          <li>
            Here we have imported the same packages as the previous but here we
            have added some middlewares like
            <b>(cookieparser,session,cors)</b>
          </li>
          <h4>
            (As you can see in the button above <b>Index.js</b>)
          </h4>
          <li>
            Here we have <b>sess</b> which looks after the session
          </li>
          <li>
            Here we have <b>corsoptions</b> which looks after the cors
          </li>
          <li>
            Now we call the required variables , and rotes which helps the app
            to run on the desireable port{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Custom;
