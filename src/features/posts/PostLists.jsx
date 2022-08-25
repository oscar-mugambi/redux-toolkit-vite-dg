import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostExcerpt from './PostExcerpt'
import { selectAllPosts, getPostStatus, getPostError, fetchPosts } from './postsSlice'

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector(getPostStatus)
  const error = useSelector(getPostError)
  let count = 0

  useEffect(() => {
    count = count + 1
    if (postStatus === 'idle' && count <= 1) {
      dispatch(fetchPosts())
    }
  }, [dispatch, fetchPosts])

  let content
  if (postStatus === 'loading') {
    content = <p>"Loading..."</p>
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map((post) => <PostExcerpt key={post.id} post={post} />)
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  )
}

export default PostsList
