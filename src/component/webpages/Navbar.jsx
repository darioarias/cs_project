import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Learn from '../webpages/Learn';
import Home from './Home';
import Animation from './Animation'


export default function MenuAppBar() {
 const [anchorEl, setAnchorEl] = React.useState(null);
 const [home, setHome] = useState(false);
 const [learnMore, setLearnMore] = useState(false);
 const [animation, setAnimation] = useState(false);
 
 const handleMenu = (event) => {
   setAnchorEl(event.currentTarget);
 };
 
 const handleHome = () => {
   setHome(true);
   setLearnMore(false);
   setAnchorEl(null);
 }
 const handleLearnMore = () => {
   setLearnMore(true);
   setHome(false);
   setAnchorEl(null);
 }
 const handleAnimation = () => {
  setLearnMore(false);
  setAnimation(true);
  setHome(false);
  setAnchorEl(null);
}
 return (
   <>
   <Box sx={{ flexGrow: 1 }}>
     <AppBar position="static">
       <Toolbar>
         <IconButton
           size="large"
           edge="start"
           color="inherit"
           aria-label="menu"
           aria-controls="menu-appbar"
           aria-haspopup="true"
           onClick={handleMenu}
           sx={{ mr: 2 }}
         >
           <MenuIcon />
         </IconButton>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           DSA Visuaizer
         </Typography>
           <div>
             <Menu
               id="menu-appbar"
               anchorEl={anchorEl}
               anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               open={Boolean(anchorEl)}
             >
               <MenuItem onClick={handleHome}>Home</MenuItem>
               <MenuItem onClick={handleLearnMore}>Learn</MenuItem>
               <MenuItem onClick={handleAnimation}>Animation</MenuItem>
             </Menu>
           </div>
       </Toolbar>
     </AppBar>
   </Box>
   {learnMore && <Learn/>}
   {home && <Home/>}
   {animation && <Animation/>}
</>
 );
}
 


