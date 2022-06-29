import React, {useState, useEffect} from 'react'
import Values from 'values.js'
import GenerateColor from './GenerateColor'
import ShowColor from './ShowColor'

import './App.css'

export default function App() {
  const [reqColor, setReqColor] = useState("#fcba03")


  const fetchColor = () =>{
    try {
        const color = new Values(reqColor)
        const colors = color.all(10)
        return colors
    } catch (error) {
        return null
      }
  }
  
  

  

  

  const renderColor = (e) =>{
    e.preventDefault()
    const input = document.querySelector(".input-color")
    setReqColor(input.value)
  }

    
  

  return (
    <>
      <GenerateColor renderColor={renderColor} />
      <ShowColor colors={fetchColor()} />
    </>
  )
}
