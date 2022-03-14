import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f16050').all(1));

  const handleSubmit = (e) => {
    e.preventDefault();


    try {
      const colors = new Values(color).all(5);
      setList(colors)
      setError(false)

    } catch (error) {
      setError(true);
      //console.log(error)
    }

  }
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025'
            className={`${error ? 'error' : null}`} />
          <button className='btn' type='submit'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          const hex = color.hex
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}></SingleColor>
        })}
      </section>
    </>
  )
}

export default App
