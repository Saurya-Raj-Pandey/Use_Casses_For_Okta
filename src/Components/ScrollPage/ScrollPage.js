import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./ScrollPage.css";
function ScrollPage() {
  return (
    <div className="Scrollbar">
      <ScrollToTop smooth style={{ right: "10%" }} />
    </div>
  );
}

export default ScrollPage;
