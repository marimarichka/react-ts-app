import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Paper, Typography, TextField, Button, CircularProgress } from "@mui/material";
import ToDoItem from "./TodoItem";
import { useAddTodoMutation, useGetTodosQuery } from "../../redux/API/API";
import { ITodoItem } from "./types";

const ToDoList = () => {
  const [value, setValue] = useState("");
  const { data: todos, isLoading: isTodosLoading } = useGetTodosQuery();
  const [addTodo, { isLoading: isAddTodoLoading }] = useAddTodoMutation();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleCreate = () => {
    addTodo({ text: value } as ITodoItem);
    setValue("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !isAddTodoLoading) handleCreate();
  };

  return (
    <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
      <Paper
        elevation={3}
        sx={{
          width: "470px",
          height: "520px",
          backgroundColor: "#F8F8F8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "6px",
        }}
      >
        <Typography variant="h6" sx={{ marginY: "20px" }}>
          TODOs
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", width: "90%" }}>
          <TextField
            onKeyDown={onKeyDown}
            value={value}
            onChange={onInputChange}
            variant="outlined"
            sx={{ width: "80%", marginRight: "10px", '& .MuiInputBase-root': {height: '40px'} }}
          />
          <Button
            disabled={isAddTodoLoading}
            onClick={handleCreate}
            variant="contained"
            disableElevation
            color="primary"
            sx={{ height: "40px", width: "20%", marginLeft: "10px" }}
          >
            Create
          </Button>
        </Box>
        <Box
          sx={{
            overflow: "auto",
            width: "100%",
            padding: "10px 0",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginY: "10px",
          }}
        >
          {isTodosLoading ? (
            <Box sx={{ marginTop: "120px" }}>
              <CircularProgress size={50} />
            </Box>
          ) : (
            todos?.map((todo) => <ToDoItem key={todo.id} todo={todo} />)
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default ToDoList;
