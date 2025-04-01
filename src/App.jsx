import { useState } from 'react'
import {Header} from './Header'
import {Navbar} from './Navbar'
import {Articles} from './Articles'
import {Article} from './Article'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  const [currentArticle, setCurrentArticle] = useState({})


  return (
    <div className='frame'>
      <div>
        <Header />
        <Navbar />
      </div>
      <div className="main-section">
     
      <Routes>
       <Route path='/' element={<Articles setCurrentArticle={setCurrentArticle} />} />
       <Route path='/article' element={<Article articleViewType='article-long-form' article={currentArticle}/> }/>
      </Routes> 
      
      </div>
    </div>
  )
}

export default App
