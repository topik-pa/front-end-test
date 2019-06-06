import React from 'react';
import CmpHeader from './header/CmpHeader'

const PageTemplate = ({ children }) => {
    //TODO: remove element main-wrapper?
    return (
        <div className="main-wrapper"> 
            <CmpHeader />
            {children}
        </div>
    )    
}


export default PageTemplate;