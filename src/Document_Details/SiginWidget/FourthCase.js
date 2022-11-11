import React from "react";
import "./index.css";
function FourthCase() {
  return (
    <>
      <div className="Text">
        <ul>
          <li>
            {" "}
            Create a function called <b>ActivateUserWithoutCredentials</b>
          </li>
          <li>
            Now we create a <b>HandleClick()</b> which calls the <b>Api</b> and
            registers the User which will now be{" "}
            <b>
              <u>Activated</u>
            </b>
          </li>
          <li>
            Next we Create a <b>Client</b> which is constant imported form the{" "}
            <i>axios.js</i>.
            <b>
              Here we have used used axios because it is easy to use library and
              it transfers the JSON data automatically
            </b>
          </li>
        </ul>
        <p>
          {" "}
          <img
            src="../Use_cases/Activating_User_Without_Credentials/Activating_User_Without_Credentials_Code.png"
            alt="hwllo"
          />
        </p>
        <h5>
          {" "}
          <b>Fig:Activate User Without Credentials</b> <br></br>
        </h5>
        <p>
          {" "}
          <img
            src="../Use_cases/User_Without_Credentials/axios.png"
            alt="hwllo"
          />
        </p>
        <h5>
          {" "}
          <b>Fig:axios.js</b> <br></br>
        </h5>
        <ul>
          <li>
            Here in the <b>axios.js</b> we have given the <b>baseURL</b> as you
            Your_Tenant link and the header it has the Authorization which is
            the token created form the tenant{" "}
            <b>(Security &#x2192; Api&#x2192; Create Token )</b> . So here the
            SSWS is the (Single Signon Web System) which allows Anypoint to make
            API request to the Authorization Server
          </li>
          <li>
            Now have <b>.post()</b> which is passed to activate to the user or
            not to so in the case above it is set as "/users?activate=true".The
            withoutCredentials here is the
            <b>(Fig:withoutCredentials.js)</b> as you can see below and see the{" "}
            <b>
              difference in the JSON format for the user without credentials
              compared to the previous Use case
            </b>
            .So in this file we have the JSON format for the data we have used
            in this program and we can see that we have the details for the User
            Creation with it's User Activate User Without Credentials with these
            requirements
            <b>(firstName,lastName,email,login as profile ).</b>
          </li>
          <li>
            Now we have <b>.then()</b> function which will continue to run
            without pause,Now we have <b>.alert()</b> which pops up after the
            user is created.
          </li>
          <li>
            {" "}
            Now for excution the program we create <b>onClick=()</b> which calls
            the function from all the fucntion connected to it. So after
            clicking the User Registration on the Web app we can check the user
            has been created or not and also we can see that the user has been
            created and it is in <b>Active</b>
          </li>
        </ul>
        <p>
          {" "}
          <img
            src="../Use_cases/User_Without_Credentials/User_Without_Credentials.png"
            alt="hwllo"
          />
        </p>
        <h5>
          {" "}
          <b>Fig:withoutCredentials.js</b> <br></br>
        </h5>
      </div>
    </>
  );
}

export default FourthCase;
