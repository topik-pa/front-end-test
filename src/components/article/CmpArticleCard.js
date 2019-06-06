import React from 'react';
import './CmpArticleCard.css';

import CmpArticleCardButton from './CmpArticleCardButton'


const CmpArticleCard = () => {
    return (
      <div className="card">
        <div className="card__number">01</div>
          <i className="card__icon material-icons">
            android
          </i>
        <div className="card__subtitle">
          Curabitur in mauris sed nunc convallis volutpat eu id libero. 
        </div>
        <div className="card__title">
          Nunc accumsan viverra lorem sit amet aliquam. Sed semper porta nulla, ut dapibus turpis feugiat eget. Phasellus eget justo sem.
        </div>
        <CmpArticleCardButton/>
      </div>
    )    
}

export default CmpArticleCard