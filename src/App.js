import { Box } from '@mui/material';
import theme from './Theme'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home'
import Lectures from './views/Lectures/Lectures'
import About from './views/About/About'
import OnlineTest from './views/OnlineTest/OnlineTest'
import Register from './views/Register/Register';
import UsersData from './views/UsersData';
import Welcome from './views/WelcomeScreen/Welcome';
import QuizComponent from './views/QuizComponent';
import Test from './views/Test/Test'
import ProtectedRoute from './protected routes/ProtectedRoutes';
import { useSelector } from 'react-redux/';

function App() {
  const authState = useSelector((state) => state.changeValue.value)
  console.log(authState)
  
  return (
    <Box >
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
        <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<OnlineTest />} />
        <Route element={<ProtectedRoute isLogged={authState} />}>
        <Route exact path='/home' element={<Home />}/> 
        <Route exact path='/lectures' element={<Lectures />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/online-test' element={<Test />} />
        <Route exact path='/register' element={<Register />} />    
        <Route exact path='/welcome' element={<Welcome />} />    
        <Route exact path='/quiz' element={<QuizComponent />} />   
        <Route exact path='/users' element={<UsersData />} /> 
        </Route>
      
        </Routes>
        </BrowserRouter>

        </StyledEngineProvider>
      </ThemeProvider>
     
    </Box>
  );
}

export default App;
