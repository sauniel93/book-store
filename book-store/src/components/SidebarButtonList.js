import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

function SidebarButton({ id, url, title }) {

  return (
    <NavLink to={url} style={{ textDecoration: "none", color: "#fff" }}>
      <Button
        className="w-full"
        key={id}
        style={{ margin: "1px", fontSize: "18px" }}
      >
        <span>{title}</span>
      </Button>
    </NavLink>
  );
}

export default function SidebarButtonList() {
  const menus = [
    { id: "one", url: "/", title: "List Books" },
    { id: "two", url: "/add", title: "Add Book" },
  ];
  return (
    <>
      <NavLink className="w-full" to={"/"} style={{ textDecoration: "none" }}>
        <Button
          className="w-full"
          style={{ marginTop: "25px", height: "40px", fontSize: "22px" }}
        >
          <span>Books Store</span>
        </Button>
      </NavLink>
      <Box>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="contained"
          className="w-full"
          style={{ marginTop: "25px", boxSizing: "border-box" }}
        >
          {menus.map((menu) => (
            <SidebarButton {...menu} key={menu.id} />
          ))}
        </ButtonGroup>
      </Box>
    </>
  );
}
