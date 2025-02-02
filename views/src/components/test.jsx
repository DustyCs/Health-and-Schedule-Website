import React from 'react'
import { useEffect, useState } from 'react'

useEffect(() => {
    console.log('test')
}, [])

[title, setTitle] = useState('')

lengthData = []

const Test = () => {
  return (
    lengthData.map((item) => <div>{item}</div>)
  )
}


export default test