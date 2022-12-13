import React from "react";
import "./document.css";

import "../bg.png";

//UI

import { Accordion } from "react-bootstrap";
import ScrollPage from "../Components/ScrollPage/ScrollPage";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

//UseCasess
import FirstCase from "../Document_Details/SiginWidget/FirstCase";
import SecondCase from "../Document_Details/SiginWidget/SecondCase";
import ThirdCase from "../Document_Details/SiginWidget/ThirdCase";
import FourthCase from "../Document_Details/SiginWidget/FourthCase";
import FifthCase from "../Document_Details/SiginWidget/FifthCase";
import SixthCase from "../Document_Details/SiginWidget/SixthCase";
import SeventhCase from "../Document_Details/SiginWidget/SeventhCase";
import EighthCase from "../Document_Details/SiginWidget/EighthCase";
import NinethCase from "../Document_Details/SiginWidget/NinethCase";
import TenthCase from "../Document_Details/SiginWidget/TenthCase";
//Snippet for the signin widget
import { FirstControlledPopup } from "../Components/Snippet/SiginWidget/firstCase/ControlledPopup";
import { SecondControlledPopup } from "../Components/Snippet/SiginWidget/secondCase/ControlledPopup";
import { ThirdControlledPopup } from "../Components/Snippet/SiginWidget/thirdCase/ControlledPopup";
import { FourthControlledPopup } from "../Components/Snippet/SiginWidget/fourthCase/ControlledPopup";
import { FifthControlledPopup } from "../Components/Snippet/SiginWidget/fifthCase/ControlledPopup";
import { SixthControlledPopup } from "../Components/Snippet/SiginWidget/sixthCase/ControlledPopup";
import { SeventhControlledPopup } from "../Components/Snippet/SiginWidget/seventhCase/ControlledPopup";
import { EigthControlledPopup } from "../Components/Snippet/SiginWidget/eighthCase/ControlledPopup";
import { NinethControlledPopup } from "../Components/Snippet/SiginWidget/ninethCase/ControlledPopup";
import { TenthControlledPopup } from "../Components/Snippet/SiginWidget/tenthCase/ControlledPopup";
//Snippet for the Sdk
import Sdk from "../Document_Details/Sdk/Sdk";
//import SdkIndexControlledPopup from "../Components/Snippet/Sdk/ControlledPopup";
import Custom from "../Document_Details/Custom/Custom";
import {
  CustomApiControlledPopup,
  CustomEnvControlledPopup,
  CustomIndexControlledPopup,
  CustomStartupControlledPopup,
} from "../Components/Snippet/Custom/ControlledPopup";
import {
  SdkEnvControlledPopup,
  SdkIndexControlledPopup,
  SdkStartupControlledPopup,
} from "../Components/Snippet/Sdk/ControlledPopup";
import { SdkApiControlledPopup } from "../Components/Snippet/Sdk/ControlledPopup";
function Document() {
  return (
    <div className="docHeader">
      <h1>Use-cases documentation with codes</h1>
      <div className="header">
        {/* SignIn widget */}
        <Accordion defaultActiveKey="0">
          <Accordion.Item>
            <Accordion.Header>
              <h5>Signin WIdget</h5>
            </Accordion.Header>
            <AccordionBody>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Create User with Password and Recovery Question</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <FirstControlledPopup />
                    <FirstCase />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h5>Activate user with Password and Recovery Question </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <SecondControlledPopup />
                    <SecondCase />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h5>Create user without credentials</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ThirdControlledPopup />
                    <ThirdCase />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h5> Activating User without Credentials</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <FourthControlledPopup />
                    <FourthCase />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <h5>Create User with Password</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <FifthControlledPopup />
                    <FifthCase />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <h5>Activating User with Password</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <SixthControlledPopup />
                    <SixthCase />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <h5>Create User with Recovery Question</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <SeventhControlledPopup />
                    <SeventhCase />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    <h5>Activating User with Recovery Question</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <EigthControlledPopup />
                    <EighthCase />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    <h5>Create user in Group</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <NinethControlledPopup />
                    <NinethCase />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    <h5>Create user with Non-Default user type</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <TenthControlledPopup />
                    <TenthCase />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </AccordionBody>
          </Accordion.Item>
        </Accordion>
        {/* Sdk */}
        <Accordion defaultActiveKey="0">
          <AccordionItem>
            <Accordion.Header>
              <h5>Sdk</h5>
            </Accordion.Header>
            <AccordionBody>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Sdk For all the Use cases </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <SdkIndexControlledPopup />
                    <SdkApiControlledPopup />
                    <SdkEnvControlledPopup />
                    <SdkStartupControlledPopup />
                    <Sdk />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
        {/* Custom */}
        <Accordion defaultActiveKey="0">
          <AccordionItem>
            <Accordion.Header>
              <h5>Custom</h5>
            </Accordion.Header>
            <AccordionBody>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Custom code For all the Use cases </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <CustomIndexControlledPopup />
                    <CustomApiControlledPopup />
                    <CustomEnvControlledPopup />
                    <CustomStartupControlledPopup />
                    <Custom />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
        <ScrollPage />
      </div>
    </div>
  );
}

export default Document;
