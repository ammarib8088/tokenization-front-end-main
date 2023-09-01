"use client";
import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton"; // Ekledik
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import logo from "@/public/logo.png";
import "./sidebar.css";

export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false, // Open the sidebar by default
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const listItemStyle = {
    marginBottom: "36px", // Alt kenarlık eklemek için
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
        height: "100%",
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        padding: "20px", 
        backgroundColor: "black"
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)} // Bir öğe tıklandığında çekmecenin kapanması
      onKeyDown={toggleDrawer(anchor, false)} // 'Esc' tuşuna basıldığında çekmecenin kapanması
    >
      <List >
        <ListItem disablePadding style={listItemStyle} >
          <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
            <Image src={logo} width={130} alt="Author's picture" />
          </ListItemButton >
        </ListItem>
        <Divider />
        {[
          {
            text: "Listed",
            icon: <img src="./listed.png" alt="" />,
            link: "/",
          },
          {
            text: "Market",
            icon: <img src="./market.png" alt="" />,
            link: "/market",
          },
          {
            text: "Staking",
            icon: <img src="./staking.png" alt="" />,
            link: "/staking",
          },
          {
            text: "Redeem",
            icon: <img src="./redeem.png" alt="" />,
            link: "/redeem",
          },
          {
            text: "Settings",
            icon: <img src="./settings.png" alt="" />,
            link: "/settings",
          },
        ].map(({ text, icon, link }, index) => (
          <ListItem key={text} disablePadding style={listItemStyle}>
            <Link href={link}>
            <ListItemButton >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor} >
          <IconButton onClick={toggleDrawer(anchor, true)} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
           
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
