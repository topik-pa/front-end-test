import React from 'react';
import './CmpAside.css';

import { CmpCard } from './../shared/CmpCard';


const CmpAside = ({ cards }) => {
    return (
      <aside>
        {
            cards.map((box, i) =>
              <CmpCard data={box} index={i} />
            )
        }        
      </aside>
    )    
}

export default CmpAside