import { useState } from 'react'
import HomePage from './components/HomePage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen flex flex-col'>
      <HomePage />
    </div>
  )
}

export default App
