import React, { memo } from "react";
import { Button, TextField, DialogContent, DialogActions, DialogTitle } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAddUserMutation, useUpdateUserMutation } from "../../redux/API/API";
import { IUser } from "../ToDoList/types";

interface UserFormProps {
  handleClose: () => void;
  user?: IUser;
}

const UserForm = memo(function UserForm({ handleClose, user }: UserFormProps) {
  const { register, getValues } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
    },
  });

  const isEditForm = !!user;

  const [addUser, { isLoading: addLoading }] = useAddUserMutation();
  const [updateUser, { isLoading: updateLoading }] = useUpdateUserMutation();

  const handleActionUser = async () => {
    const values = getValues();
    await (isEditForm ? updateUser({ ...user, ...values }) : addUser(values));
    handleClose();
  };

  return (
    <>
      <DialogTitle>{isEditForm ? `Edit user` : `Create new user`}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          placeholder="Name"
          fullWidth
          variant="outlined"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        <TextField
          margin="dense"
          placeholder="Last name"
          fullWidth
          variant="outlined"
          {...register("lastName", { required: true, maxLength: 80 })}
        />
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
