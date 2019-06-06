import React from 'react';
import CmpLogo from './CmpLogo'
import CmpMenu from './CmpMenu'
import './CmpHeader.css';

const CmpHeader = () => {
    return (
        <header>
            <CmpLogo />
            <CmpMenu />
        </header>
    )    
}

export default CmpHeader