import React, { useState } from 'react'

import './App.css'
import AddPostForm from './features/posts/AddPostForm'
import PostsList from './features/posts/PostLists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <PostsList />
      <AddPostForm />
    </div>
  )
}

export default App
