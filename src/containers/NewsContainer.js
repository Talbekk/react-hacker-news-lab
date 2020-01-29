import React, {Component} from 'react';
import NewsList from '../components/NewsList.js'
import NewsFilter from '../components/NewsFilter';
import NewsSelector from '../components/NewsSelector';
import './NewsContainer.css';

class NewsContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            stories: []
        }

        this.handleTypingArticle = this.handleTypingArticle.bind(this);
        this.handleNewsSelected = this.handleNewsSelected.bind(this);
    }

    componentDidMount(){
        const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
        const array = [];
        
        fetch(url)
        .then(res => res.json())
        .then(keys => keys.slice(0, 20))
        .then( slicedKeys => Promise.all(slicedKeys.map(key => 
            fetch(`https://hacker-news.firebaseio.com/v0/item/${key}.json`)
            .then(res => res.json())
            .then(console.log(key))
        ))
        .then(slicedStories => this.setState({stories: slicedStories}))
       )
    }

    handleTypingArticle(characters){
        const updatedStories = [...this.state.stories];
        const newStories = updatedStories.filter(story => 
            story.title.toLowerCase().includes(characters.toLowerCase()));
        this.setState({stories: newStories})
    }

    handleNewsSelected(option){

        if(option === "score"){
            const sortStories = [...this.state.stories];

            const sortedStories = sortStories.sort(function(a,b){ return b.score-a.score;});
            this.setState({stories: sortedStories});
        }
        else {
            const sortStories = [...this.state.stories];

            function compare(a, b) {
                const storyA = a[option].toUpperCase();
                const storyB = b[option].toUpperCase();
              
                let comparison = 0;
                if (storyA > storyB) {
                  comparison = 1;
                } else if (storyA < storyB) {
                  comparison = -1;
                }
                return comparison;
              }
              console.log(sortStories)
              const sortedStories = sortStories.sort(compare);
              this.setState({stories: sortedStories})
        }
    }

    render(){
        return (
            <div className="news-container">
                <h2>Hacker News</h2>
                <NewsFilter onHandleTyping={this.handleTypingArticle}></NewsFilter>
                <NewsSelector onNewsSelected={this.handleNewsSelected}></NewsSelector>
                <NewsList stories={this.state.stories}/>
            </div>
        )
    }


}

export default NewsContainer;