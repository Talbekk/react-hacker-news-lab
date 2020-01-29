import React, {Component} from 'react';
import NewsList from '../components/NewsList.js'
import NewsFilter from '../components/NewsFilter';

class NewsContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            stories: []
        }

        this.handleTypingArticle = this.handleTypingArticle.bind(this);
    }

    componentDidMount(){
        const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
        const array = [];
        
        fetch(url)
        .then(res => res.json())
        .then(keys => Promise.all(keys.map(key => 
            fetch(`https://hacker-news.firebaseio.com/v0/item/${key}.json`)
            .then(res => res.json())
            .then(console.log(key))
        ))
        .then(stories => stories.sort(function(a,b){ return b.score-a.score;}))
        .then(sortedStories => sortedStories.slice(0,20))
        .then(slicedStories => this.setState({stories: slicedStories}))
       )
    }

    handleTypingArticle(characters){
        const updatedStories = [...this.state.stories];
        console.log(updatedStories);
        console.log(characters)
        const newStories = updatedStories.filter(story => 
            story.title.toLowerCase().includes(characters));
        this.setState({stories: newStories})
    }

    render(){
        return (
            <div>
                <h2>Hacker News</h2>
                <NewsList stories={this.state.stories}/>
                <NewsFilter onHandleTyping={this.handleTypingArticle}></NewsFilter>
            </div>
        )
    }


}

export default NewsContainer;