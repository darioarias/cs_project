import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import styled from "@emotion/styled";

export default function NavBar({ toggleTheme, setTheme }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModeChange = () => {
    setTheme(!toggleTheme);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleClick}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <NavLink to="/linkedlist">LinkedList</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/queue">Queue</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/stack">Stack</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/tree">Tree</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/heap">Heap</NavLink>
            </MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <nav>
              <NavLink to="/">Learn</NavLink>
            </nav>
          </Typography>
          <Switch
            checked={toggleTheme}
            onChange={handleModeChange}
            name="ToggleTheme"
            color="default"
          />
          <Button color="inherit">
            <nav>
              <NavLink to="/sandbox">Sandbox</NavLink>
            </nav>
          </Button>
          <Button color="inherit">
            <nav>
              <NavLink to="/Users">Users</NavLink>
            </nav>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: blue;
  }
`;
