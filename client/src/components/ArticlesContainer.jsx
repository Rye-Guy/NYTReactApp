import React from 'react';

const ArticlesContainer = (props) =>{
    return(
        <div className='row'>
            <div className='col s12 m6 l6'>
                <h6>Articles:</h6>
                <div>
                  {props.renderArticles()}  
                </div>
            </div>
            <div className='col s12 m6 l6'>
                <h6>Saved Articles:</h6>
                <div>
                    {props.renderSavedArticles()}
                </div>
            </div>
        </div>
    );
}

export default ArticlesContainer;