import './App.css';
import { Box } from '@mui/material';
import Header from './components/Header';
import theme from './Theme'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home'
import Lectures from './views/Lectures/Lectures'
import About from './views/About/About'
import OnlineTest from './views/OnlineTest/OnlineTest'
import SignIn from './views/SignIn/SignIn';
import Welcome from './views/WelcomeScreen/Welcome';
import QuizComponent from './views/QuizComponent';

function App() {
  
  return (
    <Box >
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
        <BrowserRouter>
        <Header /> 
        <Routes>
        <Route exact path='/' element={<Home />}/> 
        <Route exact path='/lectures' element={<Lectures />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/online-test' element={<OnlineTest />} />
        <Route exact path='/sign-in' element={<SignIn />} />    
        <Route exact path='/welcome' element={<Welcome />} />    
        <Route exact path='/quiz' element={<QuizComponent />} />   
        </Routes>
        </BrowserRouter>

        </StyledEngineProvider>
      </ThemeProvider>
     
    </Box>
  );
}

export default App;
