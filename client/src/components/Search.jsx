import React from 'react';

const Search = (props) =>{
    return ( 
    <div>
    <div className="row">
        <form className="col s8">
            <div className="row">
                <div className="input-field col s8">
                    <textarea onChange={props.handleSearchChange} id="search" className="materialize-textarea"></textarea>
                    <label for="textarea1">Search Term</label>
                 </div>
            </div>
            <div className="row">
                <div className="input-field col s8">
                    <textarea onChange={props.handleStartYearChange} id="startYear" className="materialize-textarea"></textarea>
                    <label for="textarea1">Start Year</label>
                 </div>
            </div>
            <div className="row">
                <div className="input-field col s8">
                    <textarea onChange={props.handleEndYearChange} id="endYear" className="materialize-textarea"></textarea>
                    <label for="textarea1">End Year</label>
                 </div>
            </div>
            <button onClick={props.handleFormSubmit} className="btn waves-effect waves-light" type="submit">Submit</button>
        </form>
    </div>
    <div className='row'>
        <div className='col s8'>
            <h3>Articles:</h3>
            <div className='articleList'>
                {props.renderArticles()}
            </div>
        </div>
    </div>
    </div>
    )
    
}

export default Search;