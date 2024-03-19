import React from 'react';
import "./App.css";
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Success from './pages/Success';
import Menu from './components/Menu';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/menu" element={<Menu/>} />
      </Routes>
      
      <Toaster/>
    </Router>
  )
}

export default App
