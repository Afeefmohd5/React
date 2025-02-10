import React from 'react'
import FetchApi from './FetchApi';
import Nav from './Nav'

function App() {
  return (
    <>
      <Nav/>
      <h1 className='text-4xl text-black flex items-center justify-center p-3 text-center'>Welcome to the cats profiles </h1>
      <FetchApi/>
    </>
  );


}

export default App