import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl">Vite + React</h1>
      <div className="card my-4 bg-blue-400 p-4 rounded-lg flex gap-4">
        <button onClick={() => setCount((count) => count + 1)} className='mr-4'>
          count is {count}
        </button>
        <Button>Click me</Button>
        <Button variant="outline">Outline</Button>
        
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
