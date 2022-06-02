import React from "react";
import { ListGroup } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";

export const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="" onDoubleClick={() => onToggle(task.id)}>
      <ListGroup>
        <ListGroup.Item
          className="list-group-item-dark mb-1"
          style={task.reminder ? { borderLeft: "3px solid green" } : {}}
        >
          <h3 className="d-flex justify-content-between">
            {task.text}{" "}
            <CloseIcon
              style={{ cursor: "pointer" }}
              onClick={() => onDelete(task.id)}
            />
          </h3>
          <p>{task.day}</p>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
