import React from 'react';

const Response = (props) =>{
    return(
    <div className="card horizontal" data-target={props.id}>
        <div className="card-stacked">
            <div className="card-content">
                <h6>{props.headline}</h6>
                <p>{props.snippet}</p>
                <p>Publication Date: {props.date}</p>
            </div>
            <div className="card-action">
            <a href={props.url}>Article Link</a>
            <a className="waves-effect waves-light btn-small offset-s6" onClick={() => props.saveArticle(props.headline)}>Save</a>
            </div>
        </div>
    </div>
    );
}

export default Response;çç