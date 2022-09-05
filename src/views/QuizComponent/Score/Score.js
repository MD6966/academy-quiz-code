import React from 'react'
import {Typography, Button} from '@mui/material'
import { useNavigate } from 'react-router'
const Score = (props) => {
  const navigate = useNavigate()
   
    const handleClick =() => {
      navigate('/home')

    }
  return (
    <div style={{padding:'10%'}}>

    <div style={{backgroundColor:'#e2e2e2', height:'400px', padding:'5%' }}>
        <Typography style={{fontSize:'5rem', textAlign:'center', fontWeight:600}}> Dear  {props.name}</Typography>
   <Typography style={{fontSize:'3rem', textAlign:'center', marginTop:'5%'}}>  You Marks are  {props.score} out of {props.totalquestions}</Typography>
   <Typography style={{fontSize:'3rem', textAlign:'center', marginTop:'5%'}}>  Status : { (props.score > 12 ? 
   <Typography style={{fontSize:'3rem', textAlign:'center', color:'green', fontWeight:800}}>Pass</Typography>
   :
   <Typography style={{fontSize:'3rem', textAlign:'center', color:'red', fontWeight:800}}>Fail</Typography>
   )

   } </Typography>
    </div>
    <Button variant='contained' onClick={handleClick}> Done</Button>
    </div>
  )
}

export default Score
