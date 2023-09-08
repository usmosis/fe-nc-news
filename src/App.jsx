import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import Navigation from './components/Navigation'
import SingleArticle from './components/SingleArticle'
import Topics from './components/Topics'
function App() {
const [sortBy, setSortBy] = useState("created_at")
const [order, setOrder] = useState("desc")

  return (
    <>
    <Header/>
    <Navigation sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder = {setOrder}/>

    <Routes>
    <Route path="/" element={<ArticleList sortBy={sortBy} order={order}/>}/>
    <Route path="/articles/:article_id" element={<SingleArticle/>}/>
    <Route path="/topics" element={<Topics/>}/>
    <Route path="/:slug" element={<ArticleList sortBy={sortBy} order={order}/>}/>
    </Routes>
    </>
  )
}

export default App
