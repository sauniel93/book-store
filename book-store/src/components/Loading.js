import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loading() {
  return (
    <div
      className="flex w-full absolute"
      style={{
        justifyContent: "center",
        height: "90vh",
        alignItems: "center",
        zIndex: "4",
        opacity: "0.5",
        top: "0"
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CircularProgress size="60px" />
      </Box>
    </div>
  );
}

export default Loading;
