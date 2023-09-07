import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getTopics } from "../utils/api"

const Topics = () => {

const [topics, setTopics] = useState([])

useEffect(() => {
    getTopics()
    .then((response) => {
        const {topics} = response.data
        setTopics(topics);
    })
},[])

    return topics.map(({slug})=> {
      
        return (
            <Link to={`/${slug}`} key={slug}>
            <p slug={slug}>
                {slug}</p>
            </Link>
        )

    }
    )
}

export default Topics