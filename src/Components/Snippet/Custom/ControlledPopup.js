import React, { useRef } from "react";
import Popup from "reactjs-popup";
import ApiCodeBlock from "./CodeBlockApiCustom";
import { EnvCodeBlock } from "./CodeBlockEnv";
import IndexCodeBlock from "./CodeBlockIndexCustom";
import StartupCodeBlock from "./CodeBlockStartup";

export const CustomIndexControlledPopup = () => {
  const contentStyle = {
    width: "50vw",
    minWidth: "320px",
    screenLeft: "right",
  };
  const index = useRef();
  const openTooltip = () => index.current.open();
  return (
    <div>
      <button type="button" className="button" onClick={openTooltip}>
        <h1>Route->index.js</h1>
      </button>

      <Popup ref={index} {...{ contentStyle }}>
        <div>
          <IndexCodeBlock />
        </div>
      </Popup>

      {/*
       */}
    </div>
  );
};
export const CustomApiControlledPopup = () => {
  const contentStyle = {
    width: "50vw",
    minWidth: "320px",
    screenLeft: "right",
  };
  const ref = useRef();
  const openTooltip = () => ref.current.open();
  return (
    <div>
      <button type="button" className="button" onClick={openTooltip}>
        <h1>Sevice->api.js</h1>
      </button>

      <Popup ref={ref} {...{ contentStyle }}>
        <div>
          <ApiCodeBlock />
        </div>
      </Popup>
    </div>
  );
};
export const CustomEnvControlledPopup = () => {
  const contentStyle = {
    width: "50vw",
    minWidth: "320px",
    screenLeft: "right",
  };
  const ref = useRef();
  const openTooltip = () => ref.current.open();
  return (
    <div>
      <button type="button" className="button" onClick={openTooltip}>
        <h1>.env</h1>
      </button>

      <Popup ref={ref} {...{ contentStyle }}>
        <div>
          <EnvCodeBlock />
        </div>
      </Popup>
    </div>
  );
};
export const CustomStartupControlledPopup = () => {
  const contentStyle = {
    width: "50vw",
    minWidth: "320px",
    screenLeft: "right",
  };
  const ref = useRef();
  const openTooltip = () => ref.current.open();
  return (
    <div>
      <button type="button" className="button" onClick={openTooltip}>
        <h1>Index.js</h1>
      </button>

      <Popup ref={ref} {...{ contentStyle }}>
        <div>
          <StartupCodeBlock />
        </div>
      </Popup>
    </div>
  );
};
