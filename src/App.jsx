import React, { useState } from 'react'

import './App.css'
import PostsList from './features/posts/PostLists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <PostsList />
    </div>
  )
}

export default App
