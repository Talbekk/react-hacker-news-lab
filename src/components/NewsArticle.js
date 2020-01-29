import React from 'react';
import NewsList from './NewsList';

const NewsArticle = ({score, title, by, link}) => {
    return (
        <div className="news-article">
            <h4>{score}</h4>
            <h3>{title}</h3>
            <h4>{by}</h4>
            <h4>{link}</h4>
        </div>
    )
}

export default NewsArticle;