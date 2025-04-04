import { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { getTopics } from './api.js'


const Topics = () => {

    const [topics, setTopics] = useState([])

    useEffect(()=>{
        getTopics()
        .then(({topics})=>{
            setTopics(topics)
    })
    }, [])

return (
    <div className='topics-page'>

        <h1 className='topics-heading'>Select a topic to view articles on that subject</h1>


        <ul className='topics-list'>
        {topics.map((topic)=>{
            return (
            <li className='topics-list-item'>
                <div className='topics-list-item-name'>{topic.slug}</div>
                <div className='topics-list-item-description'topics-list-item-name>{topic.description}</div>
                <button className='topics-list-item-button'>view articles</button>
            </li>
            )
        })}
        </ul>
    

    </div>
)

}

export {Topics}

