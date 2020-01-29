import React from 'react';
import NewsArticle from './NewsArticle';

const NewsList = ({stories}) => {

    if(stories == null || stories.length === 0){
        return <img src="https://media.giphy.com/media/AMSUrxqH4vxPW/giphy.gif"/>
    }

    const newsEntry = stories.map((story, index) => {
        return (
            <NewsArticle score={story.score} title={story.title} by={story.by} url={story.url} 
            key={index}></NewsArticle>
        )
    })


    return (
        <div className="news-list">
            {newsEntry}
        </div>
    )
}
export default NewsList;