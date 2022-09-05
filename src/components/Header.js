import React from 'react'
import Box from '@mui/material/Box'
import { Toolbar, Button, AppBar, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import logo from '../assets/logo.png'
import { authentication } from '../store/counterSlice';
import { useDispatch } from 'react-redux/es/exports';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const useStyles = makeStyles((theme) => ({
  btn: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color:'#ffffff'

  }
}))
const Header = () => {
  const dispatch = useDispatch()
    const classes = useStyles()
    const handleSubmit = () => {
      // () =>dispatch(authentication(false)) 
      confirmAlert({
        title: 'Log Out',
        message: 'Are you sure to Log Out',
         buttons: [
        {
          label: 'Yes',
          onClick: () =>dispatch(authentication(false)) 
        },
        {
          label: 'No',
        }
      ]
      })

    }
  return (
    <Box>
      <AppBar position='fixed' sx={{bgcolor:'#000000'}} >
        <Toolbar> <img alt='logo' src={logo} width='70px'/>
        <Box style={{marginLeft:'auto'}}>
        <Button component={Link} color='secondary' to='/home' className={classes.btn}> Home</Button>
        <Button component={Link} color='secondary' to='/lectures' className={classes.btn}> Lectures</Button>
        <Button component={Link} color='secondary' to='/about' className={classes.btn}> About</Button>
        <Button component={Link} color='secondary' to='/online-test' className={classes.btn}> Online Test</Button>
        <Button component={Link} color='secondary' to='/register' className={classes.btn}> Register</Button>
        <Button color='secondary' className={classes.btn} onClick={handleSubmit}> Logout</Button>
        </Box>
        
        
        
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
