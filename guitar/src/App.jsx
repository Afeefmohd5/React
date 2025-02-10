import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './website/Nav'
import Nav2 from './website/Nav2'
import Mainpage from './website/Mainpage'
import Fotter from './website/Fotter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Mohammed afeef khaleed</h1>
      <Nav/>
      <Nav2/>
      <Mainpage/>
      <Fotter/>
    </>
  )
}

export default App
