import React, { useState } from 'react'

import AddPostForm from './features/posts/AddPostForm'
import PostsList from './features/posts/PostLists'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <AddPostForm />
      <PostsList />
    </div>
  )
}

export default App
