import React, {Component} from 'react';


class NewsFilter extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: ''
        };
        this.handleTyping = this.handleTyping.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(e) {
        this.setState({title: e.target.value})
    }


    handleTyping(e){
        e.preventDefault();
        const newTitle = this.state.title.trim();
        this.props.onHandleTyping(newTitle);
    }

    render(){
        return (
            <form className="news-filter" onKeyUp={this.handleTyping}>
                <input type="text" 
                onChange={this.handleTextChange}
                placeholder="Article Title"
                value={this.state.title}>
                </input>
            </form>
        )
    }

}



export default NewsFilter;