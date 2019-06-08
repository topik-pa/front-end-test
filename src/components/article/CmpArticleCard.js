import React from 'react';
import './CmpArticleCard.css';

import CmpArticleCardButton from './CmpArticleCardButton'


const CmpArticleCard = ({data, index}) => {
    return (
      <div className="card">
        <div className="card__number">{index}</div>
          <i className="card__icon material-icons">
            {data.icon} 
          </i>
        <div className="card__subtitle">
          {data.subtitle} 
        </div>
        <div className="card__title">
          {data.title}
        </div>
        <CmpArticleCardButton cta={data.cta}/>
      </div>
    )    
}

export default CmpArticleCard