import React, { useState } from 'react'
import Box from '@mui/material/Box'
import makeStyles from '@mui/styles/makeStyles'
import {Typography, TextField, Button, AppBar, Toolbar} from '@mui/material'
import { useNavigate } from 'react-router'
import logo from '../../assets/logo.png'
import {useDispatch } from 'react-redux'
import { authentication } from '../../store/counterSlice'



const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

  },
  mainBox: {
    backgroundColor: '#e2e2e2',
    height:'400px',
    width:'700px',
    borderRadius:'10px',
    marginTop:theme.spacing(15),
   
  },
  login: {
    height:'100px',
    width:'700px',
    borderTopLeftRadius:'10px',
    borderTopRightRadius:'10px',
    backgroundColor: '#000000',

  },
  loginText: {
    color:'#ffffff',
    textAlign:'center',
    fontSize:'3.5rem',
  },
  textFieldContainer: {
    marginTop:theme.spacing(3),
    padding: theme.spacing(3)
  },
  btnContainer: {
    display:'flex',
    justifyContent:'flex-end'
  },
  btn:{
    backgroundColor:'#000000',
    color:'#ffffff',
    marginTop: theme.spacing(4),
  
  }
}))

const OnlineTest = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const initialValues = {
    name : "",
    ID: ""
  }
  const [formValues, setFormValues] = useState(initialValues)
  const navigate = useNavigate()
  const handleChange =(e) => {
    const {name , value} = e.target
    setFormValues({...formValues, [name]: value});
    
  };
  const authEmail = 'smudasser36@gmail.com'
  const authPassword = 'Madina4455*'
  const handleFormSubmit =(e) => {
      e.preventDefault()
        if(formValues.name === authEmail && formValues.ID ===authPassword) {
          alert('Login Done')
          dispatch(authentication(true))
          navigate('/home')

        }
        else {
          alert("Credential are wrong")
        }
      
  }
 
  return (
    <>
    <AppBar>
      <Toolbar>
      <img alt="logo" src={logo} width='60px'/>
      </Toolbar>
    </AppBar>
    <Box className={classes.root}>
      <Box className={classes.mainBox}>
        <Box className={classes.login}>
        <Typography className={classes.loginText}> Login</Typography>
        </Box>
          <Box className={classes.textFieldContainer}>
          <form onSubmit={handleFormSubmit}>
          <TextField label='Email' name='name' value={formValues.name} onChange={handleChange} fullWidth required/> 
          <TextField label='Password' type='password' fullWidth name='ID' value={formValues.ID} onChange={handleChange} style={{marginTop:'5%'}} required /> 
          <Box className={classes.btnContainer}>
          <Button variant='contained' className={classes.btn} type='submit'> Log In</Button>
          </Box>
          </form>
          </Box>

      </Box>
      
    </Box>
    </>
  )
}

export default OnlineTest
