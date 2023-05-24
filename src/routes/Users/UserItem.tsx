import { Box, IconButton } from "@mui/material";
import React, { FC } from "react";
import { useDeleteUserMutation } from "../../redux/API/API";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IUser } from "../ToDoList/types";

interface IOneUser {
  user: IUser;
  handleOpen: () => void;
  setEditUser: (user: IUser) => void;
}

const UserItem: FC<IOneUser> = ({ user, handleOpen, setEditUser }) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    deleteUser(user);
  };

  return (
    <Box
      key={user.id}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "50px",
        backgroundColor: "#FFFFFF",
        borderRadius: "6px",
        boxShadow: "0px 2px 6px -1px rgba(0, 0, 0, 0.25)",
        marginTop: "20px",
        paddingX: "20px",
      }}
    >
      <Box sx={{ flex: 1 }}>{user.firstName}</Box>
      <Box sx={{ flex: 1 }}>{user.lastName}</Box>
      <Box sx={{ flex: 1 }}>0</Box>
      <Box sx={{ width: "50px" }}>
        <IconButton
          disabled={isLoading}
          onClick={() => {
            handleOpen();
            setEditUser(user);
          }}
        >
          <EditIcon sx={{ fontSize: "18px" }} />
        </IconButton>
      </Box>
      <Box sx={{ width: "50px", display: "flex", justifyContent: "center" }}>
        <IconButton aria-label="delete" onClick={handleRemove} disabled={isLoading}>
          <DeleteIcon sx={{ fontSize: "18px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default UserItem;
