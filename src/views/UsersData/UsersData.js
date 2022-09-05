import { Box, Button, Divider, TableCell, TableHead, TableRow, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';
import Header from '../../components/Header';
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(15)
    },
    cell: {
        color:'#ffffff',
        fontWeight:600,
        fontSize: '1.25rem',
    }
}))

const UsersData = () => {
  const navigate = useNavigate()
  const [getUserData, setGetUserData] = useState([])
  console.log(getUserData)
  const classes = useStyles()
  const getData = async (e) => {
   

    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const data = await res.json();
    console.log(data)
    if(res.status === 404 && !data )
    {console.log("error")
  
  } else {
    setGetUserData(data)
    console.log("Data get ")
  }

   


  }
  useEffect(() => {

    getData()

  }, [])
  const ButtonStyle =  {
    backgroundColor:'#800000',
    '&:hover' : {
      backgroundColor: 'red'
    }
  }
  const deleteUser = async (id) => {

    const res = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers : {
        "Content-Type": "application/json"
      }
    })
    const deleteData = await res.json()
    if(res.status === 422 || !deleteData) {
      console.log("Erorr")
      navigate('/home')
    }
    else {
      navigate('/home')
    }

  }
    return (
      <>
      <Header />
    <Box className={classes.root}>
      <Table>
        <TableHead style={{backgroundColor:'#000000', }}>
            <TableRow >
                <TableCell className={classes.cell}> #</TableCell>
                <TableCell className={classes.cell}>NAME </TableCell>
                <TableCell className={classes.cell}> EMAIL</TableCell>
                <TableCell className={classes.cell}> CNIC</TableCell>
                <TableCell className={classes.cell}> Registration ID  </TableCell>
                <TableCell className={classes.cell}> Course Type</TableCell>
                <TableCell className={classes.cell}> Marks</TableCell>
                <TableCell className={classes.cell}> Action </TableCell>
            </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor:'#e2e2e2'}}>

          {
            getUserData.map((element, id)=> {
                return (
                  <>
                  <Divider sx={{backgroundColor:'#ffffff'}} /> 
                <TableRow> 
                    <TableCell> {id+1}  </TableCell>
                    <TableCell>{element.name} </TableCell>
                    <TableCell> {element.email} </TableCell>
                    <TableCell> {element.cnic} </TableCell>
                    <TableCell> {element.regId} </TableCell>
                    <TableCell> {element.corseType} </TableCell>
                    <TableCell> {element.quizmarks + element.oralmarks + element.typingmarks} </TableCell>
                    <TableCell> <Button variant='contained' sx={ButtonStyle} endIcon={<DeleteIcon /> } onClick={() => deleteUser(element._id)}> Delete </Button></TableCell>
                </TableRow>
                  
                  </>
                )
            })
          }
            </TableBody>
      </Table>
    </Box>
          </>
  )
}

export default UsersData
