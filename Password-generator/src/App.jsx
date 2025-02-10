import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setNumberallowed] = useState(false)
  const [characterallowed, setCharacterallowed] = useState(false)
  const [password,setPassword]=useState("")

//useref hook
const passwordref=useRef(null)

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmbopqrstuvwxyz"
    if(numberallowed) str +="0123456789"
    if(characterallowed) str +="!@#$%^&*():?|}{"

    for (let i = 0; i <= length; i++) {
     let char = Math.floor(Math.random()* str.length+1)
    
     pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberallowed,characterallowed,setPassword])

  const copypasswordtoClipboard=useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

 useEffect(()=>{
  passwordgenerator()
 },[length,numberallowed,characterallowed,passwordgenerator])
  
  

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-purple-950 bg-pink-500'>
  <h1 className='text-4xl text-center text-white my-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
         type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordref}
        />
        <button onClick={copypasswordtoClipboard} className='outline-none hover:bg-purple-950 bg-black text-white shrink-0 px-3 py-0.5'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={45}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{
setlength(e.target.value)
      }}
      />
      <label> Length: {length}</label>
      
     
      <div className='flex ite  gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked={numberallowed}
        id='numberInput'
        onChange={
          ()=>{
            setNumberallowed((prev)=> !prev)
          }
        }
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex ite  gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked={characterallowed}
        id='characterInput'
        onChange={
          ()=>{
          setCharacterallowed((prev)=> !prev)
          }
        }
        />
        <label htmlFor="characterInput">Character</label>
      </div>
    </div>
      </div>
    </div>
    </>

  )
}

export default App
