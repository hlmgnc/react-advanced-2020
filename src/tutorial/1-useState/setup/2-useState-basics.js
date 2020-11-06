import React, { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState('helloooo'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState('Hello')
  const handleClick = () => {
    if (text === 'Hello') {
      setText('Goodbye')
    } else {
      setText('Hello')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
