import React from "react";
import "./App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "./bg.png";

import "bootstrap/dist/css/bootstrap.min.css";

export default function NavbarFile() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/" style={{ marginRight: "20px" }}>
        <img
          src={Logo}
          alt="BeyondId"
          width="90"
          height="30"
          className="d-inline-block align-top"
          style={{ marginRight: "47px" }}
        />
        Okta Collection
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/document" style={{ marginRight: "20px" }}>
            Documentation
          </Nav.Link>
          <NavDropdown
            title="Collections for Signin Widget"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="/CreateUserWithPwdAndRq">
              Create User With Pwd And Rq
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/ActiveWithPwdAndRQ">
              Active With Pwd And RQ
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/UserWithoutCredentials">
              User Without Credentials
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/ActivateUserWithoutCredentials">
              Activate User Without Credentials
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/UserWithPassword">
              Create User With Password
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/ActivateUserWithPassword">
              Create Activate User With Password
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/UserWithRecoveryQuestion">
              User With Recovery-Question
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/ActivateUserWithRecoveryquestion">
              Activating User With Recovery-Question
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/UserInGroup">
              Adding the user to the Group
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/UserWithNonDefault">
              Creating User With Non-Default
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
