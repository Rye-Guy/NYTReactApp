const React = require("react");

const Search = (props) =>{
    return ( 
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
    )
}

export default Search;