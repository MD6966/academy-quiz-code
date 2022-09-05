import React, { useState } from 'react'
import {Box, Typography, Button} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useLocation, useNavigate } from 'react-router'
import Checkbox from '@mui/material/Checkbox';
import CircleIcon from '@mui/icons-material/Circle';



const useStyles = makeStyles((theme) => ({
    root:{
            padding: theme.spacing(12)
    },
    container: {
        height:'400px',
        width:'1100px',
        backgroundColor:'#e2e2e2',
        padding: theme.spacing(5),
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        borderRadius:'10px'
    },
    welcome: {
        fontSize:'4.2rem',
        fontWeight: 800,

    }
    

}))

const Welcome = () => {
    const navigate = useNavigate()
    const classes = useStyles()
    const location = useLocation()
    const [checked, setChecked] = useState(false)
    const resgistrationId = location.state.ID
    const studenName = location.state.name
    console.log(location.state.name)
    const handleClick =() => {
            navigate('/quiz',{state:{id: resgistrationId ,name: studenName}})
    }
    const handleChange =(e) => {
      setChecked(e.target.checked)
    }
    
  
  
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box>
        <Typography className={classes.welcome}>
        Welcome {studenName} 
        </Typography>
        <Typography style={{fontSize:'2rem', fontWeight:600}}>
          Terms and Conditions:
        </Typography>
        <Box style={{display:'flex'}}>
        <CircleIcon /> 
        <Typography style={{marginLeft:'1rem'}}>
          There are total 30 Mcqs in the test
          </Typography>
        </Box>
        <Box style={{display:'flex'}}>
        <CircleIcon /> 
        <Typography style={{marginLeft:'1rem'}}>
          To Pass the test You must score more than 40%
          </Typography>
        </Box>
        <Box style={{display:'flex'}}>
        <CircleIcon /> 
        <Typography style={{marginLeft:'1rem'}}>
          You have to complete the test with in 25 minutes
          </Typography>
        </Box>
        <Box style={{display:'flex'}}>
        <CircleIcon /> 
        <Typography style={{marginLeft:'1rem'}}>
          Test will no be re schedule in any case
          </Typography>
        </Box>
        <Box style={{display:'flex'}}>
        <CircleIcon /> 
        <Typography style={{marginLeft:'1rem'}}>
          Don't Close the browser or don't press the back button, In case your record will be loss and you'll not be able to re take the test
          </Typography>
        </Box>

       
       <Box style={{display:'flex', marginTop:'3rem'}}>
       <Checkbox 
        checked={checked}
        onChange={handleChange}
        style={{marginLeft:'-1%'}}
        />
       
        
        <Typography   style={{marginTop:'1%'}} >I have read the terms and conditions carefully and want to start my test </Typography>
       </Box>
        <Box style={{display:'flex', justifyContent:'flex-end'}}>
          {
            checked ? 
            <>
             <Button variant='contained' style={{backgroundColor:'#000000', color:'#ffffff', width:'150px', marginTop:'2rem', }} onClick={handleClick}>
            Start Test 
        </Button>
            </> 
            :
            <>
            <Button variant='disabled' style={{ width:'150px', marginTop:'2rem', }} onClick={handleClick}>
            Start Test 
        </Button>
            </>

          }
       
        </Box>
      
        </Box>
      </Box>
    </Box>
  )
}

export default Welcome
