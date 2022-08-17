import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './CounterSlice'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  )
}

export default Counter
