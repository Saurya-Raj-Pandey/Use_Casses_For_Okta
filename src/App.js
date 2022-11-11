import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/Homepage/homePage";
import Document from "./Documentation/document";
import CreateUserWithPwdAndRq from "./Use_Cases/Create_User_with_PWD_and_RQ/Userdata";
import ActiveWithPwdAndRQ from "./Use_Cases/Activate_with_PWD_and_RQ/Userdata";
import UserWithoutCredentials from "./Use_Cases/User_without_Credentials/Userdata";
import ActivateUserWithoutCredentials from "./Use_Cases/Activate_user_without_credentials/Userdata";
import UserWithPassword from "./Use_Cases/User_with_password/Userdata";
import ActivateUserWithPassword from "./Use_Cases/Activate_User_with_password/Userdata";
import UserWithRecoveryQuestion from "./Use_Cases/User_with_Recovery_question/Userdata";
import ActivateUserWithRecoveryquestion from "./Use_Cases/Activate_user_with_recovery_Question/Userdata";
import UserInGroup from "./Use_Cases/User_in_group/Userdata";
import UserWithNonDefault from "./Use_Cases/User_with_Non_Default_user_type/Userdata";
import NavbarFile from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
      <NavbarFile />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/document" element={<Document />} />

        <Route
          path="/CreateUserWithPwdAndRq"
          element={<CreateUserWithPwdAndRq />}
        />
        <Route path="/ActiveWithPwdAndRQ" element={<ActiveWithPwdAndRQ />} />
        <Route
          path="/UserWithoutCredentials"
          element={<UserWithoutCredentials />}
        />
        <Route
          path="/ActivateUserWithoutCredentials"
          element={<ActivateUserWithoutCredentials />}
        />
        <Route path="/UserWithPassword" element={<UserWithPassword />} />
        <Route
          path="/ActivateUserWithPassword"
          element={<ActivateUserWithPassword />}
        />
        <Route
          path="/ActivateUserWithPassword"
          element={<ActivateUserWithPassword />}
        />
        <Route
          path="/UserWithRecoveryQuestion"
          element={<UserWithRecoveryQuestion />}
        />
        <Route
          path="/ActivateUserWithRecoveryquestion"
          element={<ActivateUserWithRecoveryquestion />}
        />
        <Route path="/UserInGroup" element={<UserInGroup />} />
        <Route path="/UserWithNonDefault" element={<UserWithNonDefault />} />
      </Routes>

      <Footer />
    </>
  );
}
