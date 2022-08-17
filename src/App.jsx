import React, { useState } from 'react'
import Counter from './features/counter/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Counter />
    </div>
  )
}

export default App
