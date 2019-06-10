import React from 'react';
import CmpHeader from './header/CmpHeader'

const PageTemplate = ({ children, data }) => {
    return (
        <div> 
            <CmpHeader logo={data.logo} pages={data.pages}/>
            {children}
        </div>
    )    
}


export default PageTemplate;