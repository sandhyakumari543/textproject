import { useState } from 'react';
import './App.css';
import About from './component/About'
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import TextForm from './component/TextForm';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert]=useState(null)


  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      document.body.style.color='white'
      showAlert("Dark mode has been enabled","success ")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("Light mode has been enabled","success ")
    }
  }
  // const toggleRedMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark')
  //     document.body.style.backgroundColor=' #4d0000'
  //     document.body.style.color='white'
  //     showAlert("Dark mode has been enabled","success ")
  //   }
  //   else {
  //     setMode('light')
  //     document.body.style.backgroundColor='white'
  //     document.body.style.color='black'
  //     showAlert("Light mode has been enabled","success ")
  //   }
  // }


  return (
    <>
      <Router>
      <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode} />
      <Alert  alert={alert}/>
      <div className="container my-3" >
        <Routes>
        <Route exact path='/about' element={<About/>}/>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode} /> */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
