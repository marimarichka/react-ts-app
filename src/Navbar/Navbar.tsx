import React from "react";
import Box from "@mui/material/Box";
import ListAltIcon from '@mui/icons-material/ListAlt';
// import { Typography } from "@mui/material";
// import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 80px)',
        width: '80px',
        backgroundColor: '#F8F8F8',
        borderRight: '1px solid #ECBEB4',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <ListAltIcon sx={{ color: "#ECBEB4", fontSize: 25, marginTop: '40px' }} />
    </Box>
  );
};

export default Navbar;