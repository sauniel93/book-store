import React from "react";
import SidebarButtonList from "./SidebarButtonList";
import { useMenuContext } from "../contexts/MenuContext";

const Sidebar = () => {
  const { activeMenu } = useMenuContext();
  return (
    <>
      <div className="flex absolute">
        <div
          className={`fixed ${activeMenu ? "w-18" : "w-0 d-none"}`}
          style={{ backgroundColor: "white", height: "90vh", zIndex: "5" }}
        >
          <SidebarButtonList />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
