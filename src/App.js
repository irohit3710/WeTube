import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import { useEffect, useState } from "react";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";


const App = () => {
  const [isLogedIn,setIsLogedIn] = useState(false);
  const alreadyLoggedIn = window.localStorage.getItem("alreadyLoggedIn");

  useEffect(()=>{
    if(alreadyLoggedIn){
      setIsLogedIn(true);
    }
  })

  return (
  <BrowserRouter>
    <Box sx={{backgroundColor: '#DBD7D2'  }}>
      {/* {alreadyLoggedIn && isLogedIn && <Navbar setIsLogedIn={setIsLogedIn} />} */}
      <Routes>
        <Route exact path='/' element={alreadyLoggedIn ? <Feed /> : <Login setIsLogedIn={setIsLogedIn} />} />
        <Route exact path='/Login' element={<Login setIsLogedIn={setIsLogedIn} />} />
        <Route exact path='/reset' element={<ForgotPassword/>} />
        <Route exact path='/Signup' element={<Signup setIsLogedIn={setIsLogedIn} />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);
}

export default App;