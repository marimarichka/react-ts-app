import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { ITodoItem } from "./types";

interface ITodoItemProps extends ITodoItem {
  deleteTodo: (id: number) => void
}

const ToDoItem = ({id, text, deleteTodo}: ITodoItemProps) => {

  return (
    <Box
      sx={{
        width: "90%",
        height: "40px",
        marginTop: "15px",
        backgroundColor: "white",
        borderRadius: "6px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ marginLeft: "22px", fontSize: "12px" }}>{text}</Box>
      <IconButton onClick={() => deleteTodo(id)} aria-label="delete" sx={{marginRight: '10px'}}>
        <DeleteIcon sx={{ fontSize: "18px" }} />
      </IconButton>
    </Box>
  );
};

export default ToDoItem;
