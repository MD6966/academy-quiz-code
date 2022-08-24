import React from 'react'
import Box from '@mui/material/Box'
import { Toolbar, Button, AppBar, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  btn: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color:'#ffffff'

  }
}))
const Header = () => {
    const classes = useStyles()
  return (
    <Box>
      <AppBar position='static' sx={{bgcolor:'#000000'}} >
        <Toolbar> <Typography variant='h3' sx={{color:'#ffffff'}}>Quiz App</Typography>
        <Box style={{marginLeft:'auto'}}>
        <Button component={Link} color='secondary' to='/' className={classes.btn}> Home</Button>
        <Button component={Link} color='secondary' to='/lectures' className={classes.btn}> Lectures</Button>
        <Button component={Link} color='secondary' to='/about' className={classes.btn}> About</Button>
        <Button component={Link} color='secondary' to='/online-test' className={classes.btn}> Online Test</Button>
        <Button component={Link} color='secondary' to='/sign-in' className={classes.btn}> Sign In</Button>
        </Box>
        
        
        
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
