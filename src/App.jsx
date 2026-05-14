import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router";




function App() {
  const [count, setCount] = useState(0)
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  let toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
   
  }

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      
        <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes> 
      
    </div>
   
    </>
  )
}

export default App
