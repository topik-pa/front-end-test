import React from 'react';
import './CmpArticleAside.css';

import CmpArticleCard from './CmpArticleCard'


const CmpArticleAside = ({ cards }) => {
    return (
      <aside>
        {
            cards.map((box, i) =>
              <CmpArticleCard key={i} index={i} data={box}/>
            )
        }        
      </aside>
    )    
}

export default CmpArticleAside