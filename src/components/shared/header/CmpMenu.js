import React from 'react';
import './CmpMenu.css';

const CmpMenu = ({pages}) => {
    return (
        <nav>
            <ul>
                {
                    pages.map((page, i) =>
                        <li key={i}>
                            <a href={page.url}>{page.name}</a>
                        </li>
                    )
                }
            </ul>
        </nav>
    )    
}

export default CmpMenu