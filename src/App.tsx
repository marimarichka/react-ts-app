import Box from "@mui/material/Box";
import React from "react";
import "./App.css";
import ToDoList from "./Content/ToDoList";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Navbar />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "calc(100vh - 80px)",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <ToDoList />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
