
import './App.css';
import { useState } from 'react'
import { Hudini } from './Components/Hudini';

function App() {
  const [show,setNewShow] = useState(false)
  const updateShow = () => {
    setNewShow (!show);
  }
  return (
    <>
    <Hudini show={show}/>
    <button onClick={updateShow} >changeShow</button>
    </>
  )
}

export default App;
