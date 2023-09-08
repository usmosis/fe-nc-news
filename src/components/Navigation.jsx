import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Navigation = ({sortBy, setSortBy, order, setOrder}) => {

const handleChangeSortBy = (event) => {
setSortBy(event.target.value)
}

const handleChangeOrder = (event) => {
    setOrder(event.target.value)
}
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
            
            <select name="sort_by" id="sort_by" value={sortBy} onChange={handleChangeSortBy}>
                <option>created_at</option>
                <option>votes</option>
                <option>comment_count</option>
            </select>   
            <select name="order" id="order" value={order} onChange={handleChangeOrder}>
                <option>desc</option>
                <option>asc</option>
            </select>     
            
        </nav>
    )
}

export default Navigation;