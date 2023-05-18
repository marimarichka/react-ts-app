import { Box, Button, Dialog} from "@mui/material";
import React from "react";
import { useGetUsersQuery} from "../../redux/API/API";
import AddUserForm from "./AddUserForm";
import UserItem from "./UserItem";

const Users = () => {
  const { data: users } = useGetUsersQuery();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ padding: "30px" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Box sx={{ fontSize: "20px", fontWeight: "700", display: "flex", alignItems: "center" }}>Users</Box>
        <Button variant="contained" color="primary" sx={{ height: "40px" }} onClick={handleClickOpen}>
          ADD USER
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "60px",
          backgroundColor: "#F8F8F8",
          borderRadius: "6px",
          paddingX: "20px",
        }}
      >
        {["Name", "Last name", "Todos count", "Edit", "Delete"].map((name, i) => (
          <Box sx={{ marginY: "20px", ...(i < 3 ? { flex: 1 } : { width: "50px" }) }} key={name}>
            {name}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {users?.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <AddUserForm handleClose={handleClose} />
      </Dialog>
    </Box>
  );
};

export default Users;
