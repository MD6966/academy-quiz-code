import React, { useState } from 'react'
import {Box, Button, Typography} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useLocation } from 'react-router'
import Score from './Score'
import Lottie from 'react-lottie'
import clock from '../../assets/clock.json'
import {questionBank} from '../QuizComponent/questionBank'

const useStyles = makeStyles((theme) => ({
    questions : {
        backgroundColor:'#000000'
      
    },
    container : {
        backgroundColor:'#e2e2e2',
        padding:theme.spacing(5),
        height:'100vh'
    },
    internalContainer: {
        backgroundColor:'#d3d3d3',
        marginTop:theme.spacing(10),
    },
    qNo: {
        color:'#ffffff',
        fontSize:'2.5rem',
        marginLeft: theme.spacing(5),
    },
    questionValue : {
        fontSize:'3rem',
        marginLeft:theme.spacing(2),
        fontWeight:800
    },
    Answer: {
        backgroundColor:'#ffffff',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start'

    },
    btn : {
        color:'#000000',
        fontSize:'1.5rem',
       
        
    }

}))

const QuizComponent = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: clock,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const location = useLocation()
    const [showScore, setShowScore] = useState(false)
    const classes = useStyles()
    const handleAnswerResponse =(isCorrect) => {
        if(isCorrect){
            setScore(score+1)
        }
        const nextQuestion = currentQuestion + 1 ;
        if (nextQuestion < questionBank.length)
        {
            setCurrentQuestion(nextQuestion)
        }
        else {
            setShowScore(true)
        }

    }

  return (
    <Box>
      {showScore ? (
        <Box> 
        <Score score={score} totalquestions = {questionBank.length} name={location.state.name}/>
         </Box>
      ) : (
        <>
        <Box className={classes.container}>
            <Box style={{display:'flex'}}>

            <Box>
            <Typography style={{fontSize:'2rem'}}> <span style={{fontWeight:800}}> Student Name :</span> {location.state.name} </Typography>
            <Typography style={{fontSize:'2rem'}}> <span style={{fontWeight:800}}> Instructor :</span> Syed Mudasser  </Typography>
            <Typography style={{fontSize:'2rem'}}> <span style={{fontWeight:800}}> Total Marks :</span> 30  </Typography>
            </Box>
            <Box style={{marginLeft:'50%'}}>
               <Lottie 
               options={defaultOptions}
               height='200px'
               width='200px'
               />
            </Box>


            </Box>
         
        <Box className={classes.internalContainer}>
        <Box className={classes.questions}>
            <Box className={classes.questionNumber}>
                <Typography className={classes.qNo}> Question {currentQuestion+1} of {questionBank.length} </Typography>
            </Box>

        </Box>
        <Box className={classes.questionText}>
        
                    <Typography className={classes.questionValue} >{ questionBank[currentQuestion].question}</Typography>
                
            </Box>
        <Box className={classes.Answer}>
                    {questionBank[currentQuestion].AnswerText.map((answer) => (
                        <Box> 
                            <Button className={classes.btn} onClick={() => handleAnswerResponse(answer.isCorrect)}> {answer.Answer} </Button>
                        </Box>
                    ))}
        </Box>
        </Box>
        </Box>
        </>
      )}
    </Box>
  )
}

export default QuizComponent
