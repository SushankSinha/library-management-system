import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={'/'} style={{color : "white", textDecoration : 'none'}} >
          Library Management System Dashboard
          </Link>
          </Typography>
          <Button style={{fontWeight : 'bold'}} onClick={()=> navigate('/add') } color="inherit">Add Book</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar