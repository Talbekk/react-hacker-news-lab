import React from 'react';
import NewsArticle from './NewsArticle';

const NewsList = ({stories}) => {

    const newsEntry = stories.map((story, index) => {
        return (
            <NewsArticle score={story.score} title={story.title} by={story.by} link={story.link} 
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