import { useEffect, useState } from 'react'
import './App.css'
import DisplayComponent from './components/DisplayComponent'

function App() {

  return (
    <>
      <h1 className='heading'>Currency Converter</h1>
      <DisplayComponent/>
      <p className='info'>Explore 100+ currency options!</p>
    </>
  )
}

export default App
