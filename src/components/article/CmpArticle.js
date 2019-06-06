import React from 'react';
import './CmpArticle.css';

import CmpArticleBody from './CmpArticleBody'
import CmpArticleAside from './CmpArticleAside'

const CmpArticle = () => {
    return (
      <article>
        <CmpArticleBody />
        <CmpArticleAside />
      </article>      
    )    
}

export default CmpArticle