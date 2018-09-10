import React from 'react';

const Saved = (props) =>{
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
            <a className="waves-effect waves-red btn-small offset-s6 red lighten-2" onClick={() => props.deleteArticle(props.headline)}>Delete</a>
            </div>
        </div>
    </div>
    );
}

export default Saved;