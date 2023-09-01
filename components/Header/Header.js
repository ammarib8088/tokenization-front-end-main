"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Sidebar from "../Sidebar/sidebar";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        height: "120px",
        width: "100%",
        padding: "0 16px",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#737373",
        }}
      >
        <Sidebar />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            maxWidth: "200px",
            position: "relative",
            marginRight: "10px",
            
          }}
        >
          <input
            type="text"
            placeholder="Ara..."
            style={{
              width: "100%",
              height: "40px",
              border: "1px solid #737373",
              borderRadius: "30px",
              padding: "8px",
              backgroundColor: "white",
              color: "#737373",
              paddingLeft: "50px", // Add padding left for the icon
            }}
          />
          <SearchIcon
            style={{
              position: "absolute",
              top: "50%",
              left: "16px", // Adjust the left position to center the icon vertically
              transform: "translateY(-50%)", // Center the icon vertically
              color: "#737373",
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="notifications"
            style={{ border: "1px solid #737373", marginRight: "20px" }}
          >
            <NotificationsIcon style={{ color: "#737373" }} />
          </IconButton>
          <Avatar
            alt="User Avatar"
            src={"./avatar.png"}
            onClick={handleClick}
            style={{
              cursor: "pointer",
              border: "1px solid #737373",
            }}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ marginTop: "10px" }}
          >
            <MenuItem onClick={handleClose}>Profile </MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
