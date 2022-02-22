import React, { useState, useEffect } from "react";
import {
  AppBar,
  Drawer,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  TextField,
  Typography,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { createTheme } from "@mui/material";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const [drawer2, setDrawer2] = useState(false);
  const [clicked, setClicked] = useState(false);
  const theme = createTheme({
    typography: {
      fontFamily: ["Abril Fatface", "cursive"].join(","),
    },
  });
  useEffect(() => {
    console.log("RENDERED");
  });
  return (
    <AppBar position="fixed" sx={{ height: 70 }} className="navbar">
      <Toolbar>
        <IconButton onClick={() => setDrawer(!drawer)} className="id">
          <MenuIcon fontSize="large"></MenuIcon>
        </IconButton>

        <Drawer open={drawer} onClose={() => setDrawer(!drawer)}>
          <Box sx={{ width: 400, backgroundColor: "red" }}>
            <List>
              <ListItemButton>
                <ListItemText primary="HI" />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
        {/*<Collapse
          orientation="horizontal"
          in={clicked}
          timeout={100}
          unmountOnExit
        > */}
        <TextField
          placeholder="Search Nails"
          sx={{
            flexGrow: 2,
            display: clicked ? "flex" : "none",
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: "none",
              },
          }}
          size="small"
          autoFocus
        />
        {/*</Collapse> */}
        <Typography
          component="a"
          variant="h4"
          theme={theme}
          className="item"
          sx={{
            color: "black",
            flexGrow: 2,
            textAlign: "center",
            display: clicked ? "none" : "block",
          }}
        >
          THENAILSHOPBYSB
        </Typography>
        <IconButton className="id">
          <PersonOutlineOutlinedIcon fontSize="large"></PersonOutlineOutlinedIcon>
        </IconButton>
        <IconButton className="id" onClick={() => setClicked(!clicked)}>
          <SearchOutlinedIcon fontSize="large"></SearchOutlinedIcon>
        </IconButton>

        <IconButton className="id" onClick={() => setDrawer2(!drawer2)}>
          <ShoppingBagOutlinedIcon fontSize="large"></ShoppingBagOutlinedIcon>
        </IconButton>
        <Drawer
          open={drawer2}
          onClose={() => setDrawer2(!drawer2)}
          anchor="right"
        >
          <Box sx={{ width: 400, backgroundColor: "red" }}>
            <List>
              <ListItemButton>
                <ListItemText primary="HI" />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
