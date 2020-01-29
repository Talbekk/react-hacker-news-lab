import React from 'react';

const NewsSelector = (props) => {


  function handleChange(event) {
    props.onNewsSelected(event.target.value);
  }

  return (
    <select id="news-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Sort by...</option>
      <option value="by">Name</option>
      <option value="title">Title</option>
      <option value="score">Score</option>
    </select>
  )
}

export default NewsSelector;