import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Booktable from "./Booktable";
import AddBook from "./AddBook";
import { useMenuContext } from "../contexts/MenuContext";

function Content() {
  const { activeMenu, setActiveMenu, screenWidth } = useMenuContext();
  const [width, setWidth] = useState("");

  const handleClick = () => {
    if (activeMenu && screenWidth <= 900) {
      setActiveMenu(false);
    }
  };

  const computeWidth = () => {
    if (screenWidth < 900) setWidth("w-full");
    if (activeMenu && screenWidth > 900) setWidth("computeWidthMargin");
    if (!activeMenu && screenWidth > 900) setWidth("w-full");
  };

  useEffect(() => {
    computeWidth();
  }, [screenWidth, activeMenu]);

  return (
    <div
      className={`fixed ${
        activeMenu && screenWidth >= 900 ? "ml-18" : "ml-0"
      } ${width}`}
      style={{
        padding: `${
          screenWidth >= 600 ? "28px 25px 25px 25px" : "28px 5px 25px 5px"
        }`,
        marginBottom: "25px",
        zIndex: "0",
        boxSizing: "border-box",
        overflow: "scroll",
        height: "90vh"
      }}
      onClick={() => handleClick()}
    >
      <Routes>
        <Route path="/" element={<Booktable />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default Content;
