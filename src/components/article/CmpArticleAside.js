import React from 'react';
import './CmpArticleAside.css';

import { CmpArticleCard } from './CmpArticleCard';


const CmpArticleAside = ({ cards }) => {
    return (
      <aside>
        {
            cards.map((box, i) =>
              <CmpArticleCard data={box} index={i} />
            )
        }        
      </aside>
    )    
}

export default CmpArticleAside