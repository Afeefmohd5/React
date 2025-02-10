import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Headerpage from './Components/Headerpage'
import Rating from './Components/Rating'
import Courceinfo from './Components/Courceinfo'
import Fotter from './Components/Fotter'
import Router from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Nav /> */}
      {/* <Headerpage /> */}
      {/* <Rating /> */}
      {/* <Route /> */}
      {/* <Outlet /> */}
      {/* <Courceinfo /> */}

      {/* <Fotter /> */}
      <Router />
    </>
  )
}

export default App
