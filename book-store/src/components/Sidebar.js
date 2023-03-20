import React from "react";
import { useMenuContext } from "../contexts/MenuContext";

const Sidebar = () => {
  const { activeMenu } = useMenuContext();
  return (
    <>
      <div className="flex absolute">
      {activeMenu ? (
        <div
          className="fixed w-18"
          style={{ backgroundColor: "white", height: "90vh", zIndex: "5" }}
        >
          Sidebar
        </div>
      ) : (
        <div className="fixed w-0 d-none">
          Sidebar
        </div>
      )}
      </div>
    </>
  );
};

export default Sidebar;
