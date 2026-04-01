import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>My custom react app</h1>
    </div>
  )
}

const anotherElement = (
  <a href ="https://www.google.com">Google</a>
)

const anotheruser = " hello lets learn react"
const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com'},
  'Click me to visit google',
   anotheruser
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

reactElement
)

  
 

  