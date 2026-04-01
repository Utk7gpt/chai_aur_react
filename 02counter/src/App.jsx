import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
//  let counter = 5;

let [counter,setCounter] = useState(0 );
 const addValue=()=>{
  console.log("Clicked ",counter);
  // counter = counter +1;
  setCounter(counter + 1);
 }
 const removeValue=()=>{
  console.log("clicked",counter);
  // counter = counter-1;
  setCounter(counter - 1);

 }
 if(counter < 0){
  return <h1>Counter value cannot be negative</h1>
 }

  return (
    <>
      <h1> chai aur react </h1>
      <h2>counter value : {counter}</h2>

      <button onClick ={addValue}>Add value</button>
      <br/>
      <button onClick ={removeValue}>remove value</button>
    </>
  )
}

export default App
