import { useState, React } from 'react'
import {  useSearchParams, useLocation } from "react-router-dom"
import {Header} from './Header'
import {Navbar} from './Navbar'
import {Articles} from './Articles'
import {Article} from './Article'
import {Login} from './Login'
import {Topics} from './Topics'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  //const queryParameters = new URLSearchParams(location.search)   <<--- to be used when implementing sort_by and order_by

  const location = useLocation().pathname
  const regexForString = /^\/view-article-/
  const regexForNumber = /\/view-article-([0-9]+)/g;
  const searchedForArticleID = regexForString.test(location) ? regexForNumber.exec(location)[1] : '/';


  return (
    <div className='frame'>
      <div>
        <Header />
        <Navbar />
      </div>
      <div className="main-section">
     
      <Routes>
       <Route path='/' element={<Articles />} />
       <Route path={`/view-article-${searchedForArticleID}`} element={<Article articleViewType='article-long-form' article_id={searchedForArticleID}/> }/>
       <Route path='/login' element={<Login />} />
       <Route path='/topics' element={<Topics />} />
      </Routes>
     
      
      </div>
    </div>
  )
}

export default App

