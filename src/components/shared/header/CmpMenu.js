import React from 'react';
import './CmpMenu.css';
import './CmpMenuToggleAnimation.css';

const CmpMenu = ({pages}) => {
    return (
        <nav>
            <div id="menu-toggle">
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul>
                    {
                        pages.map((page, i) =>
                            <li key={i}>
                                <a href={page.url}>{page.name}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    )    
}

export default CmpMenu