import React from 'react';
import NewsList from './NewsList';

const NewsArticle = ({score, title, by, url}) => {
    return (
        <div className="news-article">
            <h4>{score}</h4>
            <h3>{title}</h3>
            <h4>{by}</h4>
            <a href={url} target="_blank">Click to read more!</a>
            <p></p>
            <hr></hr>
        </div>
    )
}

export default NewsArticle;