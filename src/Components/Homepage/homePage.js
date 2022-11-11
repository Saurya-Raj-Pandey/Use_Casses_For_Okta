import React from "react";
import "../index.css";
import Table from "react-bootstrap/Table";
import "./hompage.css";
function HomePage() {
  return (
    <div className="maincontainer">
      <img src="../../bg.png" height={100} />
      <div className="Homepage">
        <h1>Welcome to the Tutorial of the Use-cases</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Use Cases for SignWidget</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>

              <td>
                <a href="/CreateUserWithPwdAndRq">
                  Create User with Password and Recovery Question
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <a href="/ActiveWithPwdAndRQ">
                  Activating the User with Password and Recovery Question
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <a href="/UserWithoutCredentials">
                  Create User without Credentials
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <a href="/ActivateUserWithoutCredentials">
                  Activating the User without Credentials
                </a>
              </td>
            </tr>
            <tr>
              <td>5</td>

              <td>
                <a href="/UserWithPasswords">Create User with Password</a>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <a href="/ActivateUserWithPassword">
                  Activating User with Password
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <a href="UserWithRecoveryQuestion">
                  Create User with Recovery Question
                </a>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <a href="/ActivateUserWithRecoveryquestion">
                  Activating User with Recovery Question
                </a>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                <a href="/UserInGroup">Create User in Group</a>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>
                <a href="/UserWithNonDefault">
                  Create User with Non-Default User Type
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="Homepage">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Use Cases for SDK For the Custom Refer to the document</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>

                <td>Create User with Password and Recovery Question</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Activating the User with Password and Recovery Question</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Create User without Credentials</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Activating the User without Credentials</td>
              </tr>
              <tr>
                <td>5</td>

                <td>Create User with Password</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Activating User with Password</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Create User with Recovery Question</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Activating User with Recovery Question</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Create User in Group</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Create User with Non-Default User Type</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <h3>
          Click the Documentation for Further Explanation of the Use-cases
        </h3>
      </div>
    </div>
  );
}

export default HomePage;
