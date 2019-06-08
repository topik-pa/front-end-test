import React from 'react';
import CmpHeader from './header/CmpHeader'

const PageTemplate = ({ children, data }) => {
    //TODO: remove element main-wrapper? 
    return (
        <div className="main-wrapper"> 
            <CmpHeader logo={data.logo} pages={data.pages}/>
            {children}
        </div>
    )    
}


export default PageTemplate;