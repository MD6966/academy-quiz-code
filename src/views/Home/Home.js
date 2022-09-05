import { Avatar, Box, Button, Typography, } from '@mui/material'
import React, {useState, useEffect}from 'react'
import bg from '../../assets/bg.png'
import bg2 from '../../assets/bg2.png'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import Header from '../../components/Header'

const Home = () => {
  


  return (
    <>
    <Header />
    <div style={{ backgroundImage:`url(${bg})`, height:'120vh',backgroundSize:'cover',  position:'static', width:'100%'}}>
     
     </div>
      <Box style={{marginTop:'-45%', marginLeft:'3%'}} >
      <Box style={{display:'flex', justifyContent:'center'}}>
        <Avatar style={{height:'200px', width:'200px', backgroundColor:'#ffffff'}}> <img alt='logo' src={logo} width='150px' style={{marginLeft:'15%'}}/> </Avatar>
      </Box>
      <Box style={{display:'flex', justifyContent:'center'}}>
      <Typography style={{color:'#ffffff', fontSize:'5rem', fontWeight:600, color:'#ffffff',  }}>  Welcome To Al-Noor Online Test Portal</Typography>
      </Box>
      <Box style={{display:'flex', justifyContent:'center'}}>
      <Button variant='contained' style={{backgroundColor:'#ffffff', color:'#000000'}} component={Link} to ='/register'> Get Started </Button>
      </Box>
      <Box style={{display:'flex', justifyContent:'center', marginTop:'30%'}}>
      <Button variant='contained' component={Link} to='/users'> View Records</Button>
      </Box>

      
     </Box>
     <Box style={{marginTop:'10%',}}>
      <img alt='img' src={bg2} width='100%'  />
     </Box>
    </>
  )
}

export default Home
