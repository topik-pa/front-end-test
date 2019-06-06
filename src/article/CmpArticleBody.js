import React from 'react';
import './CmpArticleBody.css';

import CmpArticleGallery from './CmpArticleGallery'

const CmpArticleBody = () => {
    return (
      <section className="article">
        <div className="article__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className="article__title">Vestibulum sit amet tellus ullamcorper, tincidunt turpis sit amet, lacinia nisl. Sed eu neque tincidunt, pretium sem eget, hendrerit velit.</div>
        <div className="article__text">Vivamus volutpat ante elit, nec egestas mi pretium at. Nam tempor pellentesque orci, sed malesuada nibh tempor id. Vivamus cursus, velit pretium tempus ullamcorper, neque velit malesuada nulla, ut consequat velit mauris in nunc.</div>
        <div className="article__footer">
          <div className="article__author">
            <img alt="" src="https://placekitten.com/g/40/40"/>
            <div>Lorem ipsum</div>
          </div>
          <div className="article__socials">
            <i className="material-icons">
              android
            </i>
            <i className="material-icons">
              android
            </i>
            <i className="material-icons">
              android
            </i>
          </div>
        </div>
      <CmpArticleGallery />
    </section> 
    )    
}

export default CmpArticleBody