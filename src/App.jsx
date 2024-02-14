import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('gray')

  return (
    <div className='container' style={{backgroundColor: color}}>
      <div className='background'>
        <button onClick={() => setColor('red')} style={{background: 'red'}}>Red</button>
        <button onClick={() => setColor('yellow')} style={{background: 'yellow'}}>Yellow</button>
        <button onClick={() => setColor('green')} style={{background: 'green'}}>Green</button>
      </div>
    </div>
  )
}

export default App
