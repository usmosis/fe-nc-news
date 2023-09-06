import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import Navigation from './components/Navigation'
import SingleArticle from './components/SingleArticle'
function App() {


  return (
    <>
    <Header/>
    <Navigation/>

    <Routes>
    <Route path="/" element={<ArticleList/>}/>
    <Route path="/articles/:article_id" element={<SingleArticle/>}/>
    </Routes>
    </>
  )
}

export default App
