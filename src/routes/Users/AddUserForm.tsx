import React, { memo } from "react";
import { Button, TextField, DialogContent, DialogActions, DialogTitle } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAddUserMutation } from "../../redux/API/API";

interface AddUserFormProps {
  handleClose: () => void;
}

const AddUserForm = memo(function AddUserForm({ handleClose }: AddUserFormProps) {
  const { register, getValues } = useForm();

  const [addUser, { isLoading }] = useAddUserMutation();

  const handleAddUser = async () => {
    const values = getValues();
    await addUser(values);
    handleClose();
  };

  return (
    <>
      <DialogTitle>Create new user</DialogTitle>
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
        <Button variant="contained" color="primary" onClick={handleAddUser} disabled={isLoading}>
          Create
        </Button>
      </DialogActions>
    </>
  );
});

export default AddUserForm;
