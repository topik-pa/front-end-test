import React from 'react';
import './CmpButton.css';


const CmpButton = ({cta, onClick=f=>f }) => {
    if (cta) {
        return (
            <a className="button" href="!#" onClick={onClick}>Clicca qui</a>
        )  
        }
        else {
            return null
        }   
}

export default CmpButton