import React from 'react';
import './CmpArticleBody.css';

import CmpArticleGallery from './CmpArticleGallery'

const CmpArticleBody = ({ article, images }) => {
    return (
      <section className="article">
        <div className="article__subtitle">{article.subtitle}</div>
        <div className="article__title">{article.title}</div>
        <div className="article__text">{article.text}</div>
        <div className="article__footer">
          <div className="article__author">
            <img alt="" src={article.avatar}/>
            <div>{article.author}</div>
          </div>
          <div className="article__socials">
          {
              article.socials.map((social, i) =>
                  <i key={i} className="material-icons">
                    {social.icon}
                  </i>
              )
          }
          </div>
        </div>
      <CmpArticleGallery images={images} />
    </section> 
    )    
}

export default CmpArticleBody