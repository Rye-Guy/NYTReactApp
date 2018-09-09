import React, { Component } from "react";
import Search from './Search';


class Main extends Component {
    state = {
        search: '',
        startYear: '',
        endYear: '',
        articles: []
    }

    render(){
        return (
            <Search></Search>
        );
    }
}
export default Main;