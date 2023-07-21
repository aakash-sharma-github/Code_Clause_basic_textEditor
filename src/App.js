import Navbar from './components/Navbar'
import Form from './components/Form'
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const changeMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#282923d1';
      // showAlert("Dark Mode Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light Mode Enabled", "success");
    }
  }
  
  return (
    <>
    <Navbar mode ={mode} changeMode={changeMode}/>
    <Form heading="Enter Your Text Here." mode ={mode}/>
    </>
  );
}

export default App;
