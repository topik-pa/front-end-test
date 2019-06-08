import React from 'react';
import './CmpArticleCardButton.css';


const CmpArticleCardButton = ({cta}) => {
    if (cta) {
        return (
            <a className="button" href="!#">Clicca qui</a>
        )  
        }
        else {
            return null
        }   
}

export default CmpArticleCardButton