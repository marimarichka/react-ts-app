import React from "react";
import Box from "@mui/material/Box";
import { Paper, Typography, TextField, Button } from "@mui/material";
import ToDoItem from "./TodoItem";

const ToDoList = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "470px",
        height: "520px",
        backgroundColor: "#F8F8F8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: '6px'
      }}
    >
      <Typography variant="h6" sx={{ marginY: "20px" }}>
        TODOs
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", width: '90%', }}>
        <TextField id="outlined-basic" variant="outlined" sx={{width: '80%', marginRight: '10px'}} />
        <Button variant="contained" disableElevation color="primary" sx={{height: '40px', width: '20%', marginLeft: '10px'}}>
          Create
        </Button>
      </Box>
      <ToDoItem />
    </Paper>
  );
};

export default ToDoList;
