import React from "react";
import Box from "@mui/material/Box";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { Link, useLocation } from "react-router-dom";
import { COLOR_PINK } from "../config/constants";

const Navbar = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        height: "calc(100vh - 105px)",
        width: "80px",
        backgroundColor: "#F8F8F8",
        borderRight: `1px solid ${COLOR_PINK}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "25px",
      }}
    >
      {[
        { pathName: "/", Icon: ListAltIcon },
        { pathName: "/users", Icon: GroupOutlinedIcon },
      ].map(({ pathName, Icon }) => {
        return (
          <Link
            key={pathName}
            to={pathName}
            style={{
              textAlign: "center",
              width: "100%",
              ...(location.pathname === pathName
                ? { width: "calc(100% - 10px", borderLeft: `5px solid ${COLOR_PINK}`, marginRight: "5px" }
                : null),
            }}
          >
            <Icon sx={{ color: COLOR_PINK, fontSize: 25, paddingY: "7px" }} />
          </Link>
        );
      })}
    </Box>
  );
};

export default Navbar;
