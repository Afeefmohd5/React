import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/Addtodo'


function App() {
 
  return (
    <>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
