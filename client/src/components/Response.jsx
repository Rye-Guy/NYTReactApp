import React from 'react';

const Response = (props) =>{
    return(
    <div className="card horizontal">
        <div className="card-stacked">
            <div className="card-content">
                <h6>{props.headline}</h6>
                <p>{props.snippet}</p>
            </div>
            <div class="card-action">
            <a href={props.url}>Article Link</a>
            </div>
        </div>
    </div>
    );
}

export default Response;