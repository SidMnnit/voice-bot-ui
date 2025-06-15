import { useState } from 'react'
import verizonLogo from './assets/verizonLogo.png'
import viteLogo from '/vite.svg'
import './App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';

function App() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const makeCall = () => {
    axios
      .get("http://localhost:8080/twilio/call?redirectUrl=https://e741-2401-4900-1cba-75a3-c457-54a8-3a70-701d.ngrok-free.app/twilio/twilio-start")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  return (
    <>
      <div className='app'>
        <a href="https://verizon.com" target="_blank">
          <img src={verizonLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Verizon AI Voice Assistant</h1>  
      <div className="card">
        <button onClick={makeCall}>
          Make call
        </button>
      </div>
      <div>
        {
          data === "Initiated" ? (<h2>Call initated, conversation going on</h2>) : (<div></div>)
        }
      </div>
      <p className="read-the-docs">
        This is a demo for Verizon Voice assistant!
      </p>
    </>
  )
}

export default App
