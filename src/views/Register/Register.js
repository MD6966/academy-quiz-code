import { Box, Button, Grid, InputLabel, MenuItem, Select, TextField, Typography,  } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router';
import Lottie from 'react-lottie'
import loader from './loader.json'
import Header from '../../components/Header';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(15)
  },
  formContainer: {
    backgroundColor:'#e2e2e2',
    height:'900px',

  },
  header : {
    backgroundColor:'#000000',
    height:'100px'
  },
  register: {
    color:'#ffffff',
    fontSize:'4.5rem',
    textAlign:'center'
  },
  form: {
    padding: theme.spacing(5)
  },
  field: {
    marginBottom: theme.spacing(2)
  }

}))



const Register = () => {
 

  const classes = useStyles()
  const initialValues = {
    name : "",
    fName: "",
    cnic: "",
    regId: "",
    corseType: "",
    email: "",
    password: "",
    quizmarks: "",
    typingmarks: "",
    oralmarks: ""

  }
  const [formValues, setFormValues] = useState(initialValues)
  const [LoaderData, setData] = useState({
    loading: false
  })
  const navigate = useNavigate()
  const handleChange =(e) => {
      const {name , value} = e.target
      setFormValues({...formValues, [name] : value})

  }
  const handleFormSubmit = async (e) => {
    setData({
      ...LoaderData,
      loading: true
    })
    e.preventDefault()
    const {name ,
    fName,
    cnic,
    regId,
    corseType,
    email,
    password,
    quizmarks,
    typingmarks,
    oralmarks
  } = formValues

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
    name ,
    fName,
    cnic,
    regId,
    corseType,
    email,
    password,
    quizmarks,
    typingmarks,
    oralmarks

      })
    });

    const data = await res.json();
    console.log(data)
    if(res.status === 404 && !data )
    {console.log("error")
  
  } else {
    alert("Data added ")
    setData({
      ...LoaderData,
      loading: false
    })
    navigate('/users')
  }

   


  }
  const courses = [
    {name : 'Basic',
    value: 'Basic'},
    {name : 'Graphics Designing',
    value: 'Graphics Designing'},
    {name : 'Web Development',
    value: 'Web Development'},
    {name : 'Web Designing',
    value: 'Web Designing'},
    {name : 'Autocad',
    value: 'Autocad'},
    {name : 'Trade',
    value: 'Trade'},
  ];
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  

  return (
    <>
    <Header />
    <Box className={classes.root}>
        <Box className={classes.formContainer}>
          <Box className={classes.header}>
          <Typography className={classes.register}> Register </Typography>
          </Box>
          <Box className={classes.form}>
            <form onSubmit={handleFormSubmit}>
            <TextField label='Name' fullWidth className={classes.field} name='name' value={formValues.name} required onChange={handleChange}/> 
            <TextField label='Father Name' fullWidth className={classes.field} name='fName' value={formValues.fName} required onChange={handleChange}/> 
            <TextField label='CNIC - NO' fullWidth className={classes.field} name='cnic' value={formValues.cnic}  required onChange={handleChange} /> 
            <TextField label='Email' type='email' fullWidth className={classes.field} name='email' value={formValues.email}  required onChange={handleChange} />
            <TextField label='password' type='password' fullWidth className={classes.field} name='password' value={formValues.password}  required onChange={handleChange} />
            <TextField label='Registration ID' fullWidth  className={classes.field} name='regId' value={formValues.regId}  required onChange={handleChange}/> 
            <Grid container>
              <Grid item>
                <TextField label = 'Enter Quiz Obtained Marks' required onChange={handleChange} name='quizmarks' value={formValues.quizmarks} style={{marginRight:'3rem'}}  />
              </Grid>
              <Grid item>
                <TextField label = 'Enter Typing Test Marks' required onChange={handleChange} name='typingmarks' value={formValues.typingmarks} style={{marginRight:'3rem'}} />
              </Grid>
              <Grid item>
                <TextField label = 'Oral Test Marks' name='oralmarks' required onChange={handleChange} value={formValues.oralmarks} />
              </Grid>

            </Grid>
            <InputLabel> Select Course Type</InputLabel>
            <Select fullWidth required onChange={handleChange} value={formValues.corseType} name='corseType' label='Select Course Type'>
              {
                courses.map((item, index) => {
                  return (
                    <MenuItem value={item.value} key={index}> {item.name}  </MenuItem>
                  )
                })
              }
           
            </Select>
            {
              LoaderData.loading ? <Lottie 
              options={defaultOptions}
                height={100}
                width={100}
              />  : 
              <Box style={{display:'flex', justifyContent:'flex-end', marginTop:'3%'}}>
              <Button variant='contained' type='submit'> submit</Button>
            </Box>

            }
            
            
            </form>
          </Box>

        </Box>
    </Box>
    </>
  )
}

export default Register
