import React from 'react';
import './CmpArticle.css';

import CmpArticleBody from './CmpArticleBody';


const CmpArticle = ({ article, images }) => {
    return (
      <div className="article-wrapper">
        <article>
          <CmpArticleBody article={article} images={images} />        
        </article> 
        <div className="shadow"></div>
      </div>
           
    )    
}

export default CmpArticle