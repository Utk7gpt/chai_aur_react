import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
 
  return (
   <> 
   <h1 className='bg-green-300 p-4 rounded-3xl'>Hello js learning</h1>
   <Card username="John Doe" />
   <Card username="Jane Smith" btnText="Follow" />
     
</>
  );
}

export default App
