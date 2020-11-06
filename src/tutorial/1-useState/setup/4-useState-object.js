import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'hello from here',
  })

  const [name, setName] = useState('peter')
  const [age, setAge] = useState('24')
  const [message, setMessage] = useState('hello from here')

  const changeMessage = () => {
    // setPerson({ ...person, message: 'hellooo!!!' })
    setMessage('hello my friend')
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
