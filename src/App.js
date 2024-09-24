import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
  })

  setTimeout(() => {
    setAlert(null);
  },2000
)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#062740';
      showAlert("Dark mode has been enabled!", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
   
   <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert ={alert}/>
      <div className="container my-3">
      <Routes>
            <Route path="/about" element={<About />} /> 
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text below:" mode={mode} />} />
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
