import { Typography } from "@mui/material";
import React from "react";
import { Buttonn } from "./Button";
import { useLocation } from "react-router-dom";

export const Header = ({ showAddTask, setShowAddTask }) => {
  const location = useLocation();
  const onClick = () => {
    setShowAddTask(!showAddTask);
  };
  return (
    <div className="d-flex justify-content-between mb-3">
      <Typography variant="h3" noWrap>
        Task Tracker
      </Typography>
      {location.pathname === "/" && (
        <Buttonn
          color={showAddTask ? "Crimson" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onClick={onClick}
        />
      )}
    </div>
  );
};
