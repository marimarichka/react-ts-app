import React, { memo, useState } from "react";
import { Button, TextField, DialogContent, DialogActions, DialogTitle, Select, MenuItem } from "@mui/material";
import { useAddUserMutation, useUpdateUserMutation } from "../../redux/API/API";
import { IUser, UserRole } from "../ToDoList/types";

interface UserFormProps {
  handleClose: () => void;
  user?: IUser;
}

const UserForm = memo(function UserForm({ handleClose, user }: UserFormProps) {
  const [addUser, { isLoading: addLoading }] = useAddUserMutation();
  const [updateUser, { isLoading: updateLoading }] = useUpdateUserMutation();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [values, setValues] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    role: user?.role || UserRole.Admin,
  });

  const isEditForm = !!user;

  const errors = {
    firstName: isButtonPressed && !values.firstName,
    lastName: isButtonPressed && !values.lastName,
  };

  const handleActionUser = async () => {
    setIsButtonPressed(true);
    if (!!values.firstName && !!values.lastName) {
      await (isEditForm ? updateUser({ ...user, ...values }) : addUser(values));
      handleClose();
    }
  };

  return (
    <>
      <DialogTitle>{isEditForm ? `Edit user` : `Create new user`}</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          error={errors.firstName}
          helperText={errors.firstName && "Name is required"}
          autoFocus
          placeholder="Name"
          variant="outlined"
          value={values.firstName}
          onChange={({ target: { value } }) => setValues({ ...values, firstName: value })}
          sx={{ marginBottom: "15px", width: "350px" }}
        />
        <TextField
          error={errors.lastName}
          helperText={errors.lastName && "Last name is required"}
          placeholder="Last name"
          variant="outlined"
          value={values.lastName}
          onChange={({ target: { value } }) => setValues({ ...values, lastName: value })}
          sx={{ marginBottom: "15px", width: "350px" }}
        />
        <Select
          onChange={({ target: { value } }) => setValues({ ...values, role: value as UserRole })}
          value={values.role}
          sx={{ width: "350px" }}
        >
          <MenuItem value={UserRole.Admin}>Admin</MenuItem>
          <MenuItem value={UserRole.Crew}>Crew</MenuItem>
          <MenuItem value={UserRole.Manager}>Manager</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions sx={{ paddingX: "24px", paddingBottom: "24px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleActionUser}
          disabled={isEditForm ? updateLoading : addLoading}
        >
          {isEditForm ? `Edit` : `Create`}
        </Button>
      </DialogActions>
    </>
  );
});

export default UserForm;
