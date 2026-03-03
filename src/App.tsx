import {useState} from 'react'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  const hendlClick = () =>{
    setCount(count + 1)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={hendlClick}>
          count is {count}
        </button>
      </div>
    </>
  )
}

