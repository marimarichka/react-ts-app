import Box from "@mui/material/Box";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ToDoList from "./routes/ToDoList/ToDoList";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Users from "./routes/Users/Users";

function App() {
  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Navbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: 'column',
            width: "100%",
            height: "calc(100vh - 80px)",
            overflow: 'auto',
            flexGrow: 1,
          }}
        >
          <Routes>
            <Route path="/" element={<ToDoList />} />
            <Route path="users" element={<Users />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
