import React from 'react';
import './CmpArticleCardButton.css';


const CmpArticleCardButton = ({cta, onClick=f=>f }) => {
    if (cta) {
        return (
            <a className="button" href="!#" onClick={onClick}>Clicca qui</a>
        )  
        }
        else {
            return null
        }   
}

export default CmpArticleCardButton