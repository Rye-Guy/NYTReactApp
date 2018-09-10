import React, { Component } from "react";
import Search from './Search';
import Response from './Response';
import API from '../utils/api';


class Main extends Component {
    state = {
        search: '',
        startYear: '',
        endYear: '',
        articles: []
    }

    handleSearchChange = (event) =>{
       this.setState({search: event.target.value}); 
    }

    handleStartYearChange = (event) =>{
        this.setState({startYear: event.target.value});
    }

    handleEndYearChange = (event) =>{
        this.setState({endYear: event.target.value});
    }

    handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log('form event triggered');
        API.searchNYT(this.state.search, this.state.startYear, this.state.endYear).then((res)=>{
            console.log(res);
            this.setState({articles: res.data.response.docs});
            console.log(this.state.articles);
        });
    }

    renderArticles = () => {
        return this.state.articles.map(article =>(
            <Response 
            headline={article.headline.main}
            snippet={article.snippet}
            url={article.web_url}
            />
        ));
    }

   


    render(){
        return (
            <Search 
            handleSearchChange={this.handleSearchChange}
            handleStartYearChange={this.handleStartYearChange}
            handleEndYearChange={this.handleEndYearChange}
            handleFormSubmit={this.handleFormSubmit}
            renderArticles={this.renderArticles}>
            </Search>
        );
    }
}
export default Main;