import React, {Component} from '.react';
import NewsList from '../components/NewsList.js'

class NewsContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            keyList: [],
            stories: []
        }
    }
    render(){
        return (
            <div>
                <h2>Hacker News</h2>
            </div>
        )
    }


}

export default NewsContainer;