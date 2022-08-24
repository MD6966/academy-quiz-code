import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useLocation, useNavigate } from 'react-router'


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
    const resgistrationId = location.state.ID
    const studenName = location.state.name
    // console.log(location.state.name)
    const handleClick =() => {
            navigate('/quiz',{state:{id: resgistrationId ,name: studenName}})
    }
  
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box>
        <Typography className={classes.welcome}>
        Welcome {studenName} 
        </Typography>
        <Box style={{display:'flex', justifyContent:'flex-end'}}>
        <Button variant='contained' style={{backgroundColor:'#000000', color:'#ffffff', width:'150px', marginTop:'2rem', }} onClick={handleClick}>
            Start Test 
        </Button>
        </Box>
      
        </Box>
      </Box>
    </Box>
  )
}

export default Welcome
