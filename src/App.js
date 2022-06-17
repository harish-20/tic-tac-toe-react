import Box from './components/Box';
import Popup from './components/Popup';
import './App.css';
import { useState } from 'react';

function App() {
  const [win,setWin]= useState(false)

  //get the winner and send it to popUp component
  const checkWin=(val)=>{
    setWin(val)
  }
  //if it called the pop up will closed
const closePopup=(descision)=>{
  if(descision){
    setWin('')
  }
}

  return (
    <div className="App">
      <h1>Tic Tac Toe Game</h1>
      <Box getWin={checkWin}/>
      {win&&<Popup winner={win} closePopup={closePopup}/>}
    </div>
  );
}

export default App;