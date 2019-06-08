import React from 'react';
import './CmpArticle.css';

import CmpArticleBody from './CmpArticleBody'
import CmpArticleAside from './CmpArticleAside'

const CmpArticle = ({ article, images, cards }) => {
    return (
      <article>
        <CmpArticleBody article={article} images={images} />
        <CmpArticleAside cards={cards}/>
      </article>      
    )    
}

export default CmpArticle