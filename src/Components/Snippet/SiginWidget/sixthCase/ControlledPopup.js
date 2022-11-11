import React, { useRef } from "react";
import Popup from "reactjs-popup";
import CodeBlock from "./CodeBlockSixth";

export const SixthControlledPopup = () => {
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
        <h1>Full Code for this modal</h1>
      </button>

      <Popup ref={ref} {...{ contentStyle }}>
        <div>
          <CodeBlock />
        </div>
      </Popup>
    </div>
  );
};
