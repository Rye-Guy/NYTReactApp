import React, { Component } from "react";
import Search from './Search';
import ArticlesContainer from './ArticlesContainer';
import Response from './Response';
import Saved from './Saved';
import API from '../utils/api';


class Main extends Component {
    state = {
        search: '',
        startYear: '',
        endYear: '',
        articles: [],
        savedArticles: []
    }

    componentDidMount(){
        this.getSavedArticles()
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

    handleArticleSave = (title) =>{
        const findArticleTitle = this.state.articles.find(el => el.headline.main === title);
        console.log(findArticleTitle);
        const newArticle = {title: findArticleTitle.headline.main, snippet: findArticleTitle.snippet, date: findArticleTitle.pub_date, url: findArticleTitle.web_url};
        API.saveArticle(newArticle);
        console.log(newArticle.title + newArticle.snippet + newArticle.date + newArticle.url);
        this.getSavedArticles();
    }


    deleteArticle = (title) =>{
        const articleTitle = this.state.savedArticles.find(el => el.title === title);
        console.log(articleTitle);
        API.deleteArticle(articleTitle);
        this.getSavedArticles();
    }

    renderArticles = () => {
        return this.state.articles.map(article =>(
            <Response 
            key={article._id}
            id={article._id}
            headline={article.headline.main}
            snippet={article.snippet}
            date={article.pub_date}
            url={article.web_url}
            saveArticle={this.handleArticleSave}
            />
        ));
    }

    getSavedArticles = () =>{
        API.getArticles().then((res)=>{
            console.log(res);
            this.setState({savedArticles: res.data});
        });
    }

    renderSavedArticles = () =>{
        return this.state.savedArticles.map(article =>(
            <Saved 
            key={article._id}
            headline={article.title}
            snippet={article.snippet}
            date={article.date}
            url={article.url}
            deleteArticle={this.deleteArticle}
            />
        ));
    }
    render(){
        return (
        <div>
            <Search 
            handleSearchChange={this.handleSearchChange}
            handleStartYearChange={this.handleStartYearChange}
            handleEndYearChange={this.handleEndYearChange}
            handleFormSubmit={this.handleFormSubmit}
            renderArticles={this.renderArticles}>
            </Search>
            <ArticlesContainer 
            renderArticles={this.renderArticles}
            renderSavedArticles={this.renderSavedArticles}>
            </ArticlesContainer>
        </div>
        );
    }
}
export default Main;