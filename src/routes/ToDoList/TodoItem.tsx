import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { FC } from "react";
import { ITodoItem } from "./types";
import { useDeleteTodoMutation } from "../../redux/API/API";

interface TodoItemProps {
  todo: ITodoItem;
}

const ToDoItem: FC<TodoItemProps> = ({ todo }) => {
  const [deleteTodo, {isLoading}] = useDeleteTodoMutation();

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    deleteTodo(todo);
  };

  return (
    <Box
      sx={{
        width: "90%",
        minHeight: "40px",
        marginY: "5px",
        backgroundColor: "white",
        borderRadius: "6px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ marginLeft: "22px", fontSize: "12px" }}>{todo.text}</Box>
      <IconButton disabled={isLoading} onClick={handleRemove} aria-label="delete" sx={{ marginRight: "10px" }}>
        <DeleteIcon sx={{ fontSize: "18px" }} />
      </IconButton>
    </Box>
  );
};

export default ToDoItem;
