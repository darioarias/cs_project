import React from "react";
import { Link, Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

import { useSelector, useDispatch } from "react-redux";
import { removeAuthToken } from "../../redux_features/user/authTokenSlice";
import { removeUsername } from "../../redux_features/user/usernameSlice.js";

import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import styled from "@emotion/styled";
import LoginIcon from "@mui/icons-material/Login";
import LockIcon from "@mui/icons-material/Lock";
import SignForm from "../pages/Sign.jsx";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default function NavBar({ toggleTheme, setTheme }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [authToken] = React.useState(
    useSelector((state) => state.authToken.value)
  );

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModeChange = () => {
    setTheme(!toggleTheme);
  };

  const signout = () => {
    dispatch(removeAuthToken());
    dispatch(removeUsername());
    // cookies.remove("token");
    // cookies.remove("username");
    console.log("user has been signed out");
    console.log(this.props);
    navigate("/");
  };
  if (!authToken) <Navigate to="/" />;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {!useSelector((state) => state.authToken.value) && (
            <IconButton
              component={Link}
              to="/Sign"
              size="large"
              edge="start"
              color="inherit"
              onClick={SignForm}
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LoginIcon />
            </IconButton>
          )}
          {useSelector((state) => state.authToken.value) && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LockIcon onClick={signout} />
            </IconButton>
          )}

          {/* <Menu
          //   id="basic-menu"
          //   anchorEl={anchorEl}
          //   open={open}
          //   onClose={handleClose}
          //   MenuListProps={{
          //     "aria-labelledby": "basic-button",
          //   }}
          // >
          //   <MenuItem onClick={handleClose}>
          //     <NavLink to="/linkedlist">LinkedList</NavLink>
          //   </MenuItem>
          //   <MenuItem onClick={handleClose}>
          //     <NavLink to="/queue">Queue</NavLink>
          //   </MenuItem>
          //   <MenuItem onClick={handleClose}>
          //     <NavLink to="/stack">Stack</NavLink>
          //   </MenuItem>
          //   <MenuItem onClick={handleClose}>
          //     <NavLink to="/tree">Tree</NavLink>
          //   </MenuItem>
          //   <MenuItem onClick={handleClose}>
          //     <NavLink to="/heap">Heap</NavLink>
          //   </MenuItem>
          // </Menu> */}
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
          {/* <Button color="inherit">
            <nav>
              <NavLink to="/Users">Testing Users</NavLink>
            </nav>
          </Button> */}
          {useSelector((state) => state.authToken.value) && (
            <Button color="inherit">
              <nav>
                <NavLink to="/Profile">Profile</NavLink>
              </nav>
            </Button>
          )}
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
