import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserPage from './pages/UserPage/UserPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserPage/>
       
    </>
  )
}

export default App
