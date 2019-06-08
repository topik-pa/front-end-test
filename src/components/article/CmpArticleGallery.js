import React from 'react';
// import './CmpArticleGallery.css';

const CmpArticleGallery = ({ images }) => {
    return (
      <div className="article__gallery">
        {
            images.map((image, i) =>
                <img key={i} alt="" src={image.src} />
            )
        }
      </div>
    )    
}

export default CmpArticleGallery