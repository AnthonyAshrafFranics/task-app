import { Button } from "@mui/material";
import React from "react";

export const Buttonn = ({ color, text, onClick }) => {
  return (
    <Button
      onClick={onClick}
      style={{ backgroundColor: color, color: "white" }}
    >
      {text}
    </Button>
  );
};
