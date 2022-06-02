import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please Add a Task...");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <div className="mb-3">
      <Grid container className="mb-2">
        <Grid item xs={12} sm={12} md={6} lg={6} className="mb-2">
          <TextField
            id="filled-basic"
            label="Add Task"
            variant="filled"
            value={text}
            onChange={(e) => setText(e.target.value)}
            color="success"
            style={{ width: "70%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} className="mb-2">
          <TextField
            id="filled-basic"
            label="Add Day & Time"
            variant="filled"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            color="success"
            style={{ width: "70%" }}
          />
        </Grid>
      </Grid>

      <FormControlLabel
        control={<Checkbox checked={reminder} />}
        label=" Set Reminder"
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}
      />
      <br />
      <Button
        style={{ backgroundColor: "black", color: "white", width: "20%" }}
        onClick={handleAddTask}
      >
        Save Task
      </Button>
    </div>
  );
};
