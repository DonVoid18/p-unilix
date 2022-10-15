import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
const AlarmClock = ({ name, titleClock, eventOnChan, valueHor }) => {
  return (
    <Stack noValidate spacing={3}>
      <TextField
        name={name}
        id="time"
        label={titleClock}
        type="time"
        defaultValue={valueHor || "00:00"}
        InputLabelProps={{
          shrink: true,
        }}
        // inputProps={{
        //   step: 300, // 5 min
        // }}
        onChange={eventOnChan}
      />
    </Stack>
  );
};

export default AlarmClock;
