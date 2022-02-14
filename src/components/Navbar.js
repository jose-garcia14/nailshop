import React, { useState } from 'react';
import {
  AppBar,
  Drawer,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { createTheme } from '@mui/material';

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const theme = createTheme({
    typography: {
      fontFamily: ['Abril Fatface', 'cursive'].join(','),
    },
  });
  return (
    <AppBar position="fixed" sx={{ height: 70, backgroundColor: 'white' }}>
      <Toolbar>
        <IconButton
          onClick={() => setDrawer(!drawer)}
          sx={{
            marginLeft: '10%',
            marginRight: '25%',
            marginTop: 1,
            color: 'black',
            '&.MuiButtonBase-root:hover': {
              bgcolor: 'transparent',
            },
          }}>
          <MenuIcon fontSize="large"></MenuIcon>
        </IconButton>
        <Drawer open={drawer} onClose={() => setDrawer(!drawer)}>
          <Box sx={{ width: 400, backgroundColor: 'red' }}>
            <List>
              <ListItemButton>
                <ListItemText primary="HI" />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
        <Typography
          component="a"
          variant="h4"
          theme={theme}
          sx={{
            color: 'black',
          }}>
          THENAILSHOPBYSB
        </Typography>
        <IconButton
          sx={{
            marginTop: '.5%',
            marginLeft: '20%',
            color: 'black',
          }}>
          <PersonOutlineOutlinedIcon fontSize="large"></PersonOutlineOutlinedIcon>
        </IconButton>
        <IconButton
          sx={{
            marginLeft: '1%',
            marginTop: '.5%',
            color: 'black',
          }}>
          <SearchOutlinedIcon fontSize="large"></SearchOutlinedIcon>
        </IconButton>
        <IconButton
          sx={{
            marginLeft: '1%',
            marginTop: '.5%',
            color: 'black',
          }}>
          <ShoppingBagOutlinedIcon fontSize="large"></ShoppingBagOutlinedIcon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
