import React from 'react';
import CmpLogo from './CmpLogo'
import CmpMenu from './CmpMenu'
import './CmpHeader.css';

const CmpHeader = ({logo, pages}) => {
    
    return (
        <header className="fixed">
            <div>
                <CmpLogo logo={logo}/>            
                <CmpMenu pages={pages}/>
            </div>            
        </header>
    )    
}

export default CmpHeader