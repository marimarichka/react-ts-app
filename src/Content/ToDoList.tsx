import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Paper, Typography, TextField, Button } from "@mui/material";
import ToDoItem from "./TodoItem";
import { ITodoItem } from "./types";

const ToDoList = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const [value, setValue] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    const newTodo = {id: new Date().getTime(), text: value};
    setTodos([...todos, newTodo]);
    setValue('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') onClick();
  };

  const deleteTodo = (id: number) => {
    const removeTodo = todos.filter((todo) => id !== todo.id);
    setTodos(removeTodo);
  };

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
        <TextField onKeyDown={onKeyDown} value={value} onChange={onInputChange} id="outlined-basic" variant="outlined" sx={{width: '80%', marginRight: '10px'}} />
        <Button onClick={onClick} variant="contained" disableElevation color="primary" sx={{height: '40px', width: '20%', marginLeft: '10px'}}>
          Create
        </Button>
      </Box>
      {todos.map(todo => <ToDoItem key={todo.id} {...todo} deleteTodo={deleteTodo} />)}
    </Paper>
  );
};

export default ToDoList;
