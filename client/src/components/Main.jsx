import React, { Component } from "react";
import Search from './Search';


class Main extends Component {
    state = {
        search: '',
        startYear: '',
        endYear: '',
        articles: []
    }

    handleSearchChange = (event) =>{
       this.setState({search: event.target.value}); 
       console.log(event.target.value)
    }

    handleStartYearChange = (event) =>{
        this.setState({startYear: event.target.value});
        console.log(event.target.value);
    }

    handleEndYearChange = (event) =>{
        this.setState({endYear: event.target.value});
        console.log(event.target.value);
    }

   


    render(){
        return (
            <Search 
            handleSearchChange={this.handleSearchChange}
            handleStartYearChange={this.handleStartYearChange}
            handleEndYearChange={this.handleEndYearChange}>
            </Search>
        );
    }
}
export default Main;