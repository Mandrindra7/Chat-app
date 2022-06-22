import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
 const navigate = useNavigate()
 const currentUser = { id : 1, profilePicture : "https://robohash.org/quiavitaeofficiis.png?size=50x50&set=set1"}
   
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
            <Typography 
                variant="h6" 
                color="inherit" 
                component="div" 
                sx={{ flexGrow: 1 }}
                align ='left'
            >
                Chat-App
            </Typography>
            <Typography
                variant="h6" 
                color="inherit" 
                onClick={() => navigate('/actu')}
            >
                Actu
            </Typography>
            <IconButton    
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
            >
                <Avatar alt="Remy Sharp" src={currentUser.profilePicture} />
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;