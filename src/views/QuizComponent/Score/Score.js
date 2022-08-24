import React from 'react'
import {Typography, Button} from '@mui/material'
const Score = (props) => {
   
    console.log(props)
  return (
    <div style={{padding:'10%'}}>

    <div style={{backgroundColor:'#e2e2e2', height:'400px', padding:'5%' }}>
        <Typography style={{fontSize:'5rem', textAlign:'center', fontWeight:600}}> Dear  {props.name}</Typography>
   <Typography style={{fontSize:'3rem', textAlign:'center', marginTop:'5%'}}>  You Marks are  {props.score} out of {props.totalquestions}</Typography>
   <Typography style={{fontSize:'3rem', textAlign:'center', marginTop:'5%'}}>  Status : Pass </Typography>
    </div>
    <Button variant='contained'> Done</Button>
    </div>
  )
}

export default Score
