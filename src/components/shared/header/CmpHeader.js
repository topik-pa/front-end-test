import React from 'react';
import CmpLogo from './CmpLogo'
import CmpMenu from './CmpMenu'
import './CmpHeader.css';

const CmpHeader = ({logo, pages}) => {
    
    return (
        <header className="fixed">
            <CmpLogo logo={logo}/>            
            <CmpMenu pages={pages}/>
        </header>
    )    
}

export default CmpHeader