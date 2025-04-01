import { useState } from 'react'
import {Header} from './Header'
import {Navbar} from './Navbar'
import {Articles} from './Articles'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='frame'>
      <div>
        <Header />
        <Navbar />
      </div>
      <div className="main-section">
        <Articles />
      </div>
    </div>
  )
}

export default App
