import React, {Component} from 'react';
// import NewsList from '../components/NewsList.js'

class NewsContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            stories: []
        }
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
        .then(stories => this.setState({stories: stories}))
       )
    }

    render(){
        return (
            <div>
                <h2>Hacker News</h2>
                {/* <NewsList></NewsList> */}
            </div>
        )
    }


}

export default NewsContainer;