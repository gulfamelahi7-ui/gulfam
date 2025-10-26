import React, { useState } from 'react'

const UseState = () => {
  const [colour,setColour] = useState('aba')
  return (
    <div>
      <h1>my name is rana gulfam elahi {colour}</h1>
      <button type='button' onClick={()=> setColour('Imram Khan')}> Click Me</button>
      <button type='button' onClick={()=> setColour('Pakistan')}> chanege me </button>
    </div>
  )
}

export default UseState