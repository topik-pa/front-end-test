import React from 'react';
import { Component } from 'react';
import './CmpArticleGallery.css';


export class CmpArticleGallery extends Component {

  constructor(props) {
    super(props)
    this.getImages = this.getImages.bind(this)
  }


  getImages() {
    let allImages = [];
    let arrImg = [];
    const MAX_IMAGES = 12;
    let images = this.props.images;

    let over = images.length % 3;

    allImages = images.slice(0, images.length - over);

    if(allImages.length > MAX_IMAGES) {
      allImages.length = MAX_IMAGES;
    }


    var tempArr = [];
    allImages.forEach((elem, i) => {
      var obj = {};
      obj.src = elem.src;
      obj.alt = elem.alt;

      if(i%3 === 0) {
        arrImg.push(obj);
      }
      else {    
        tempArr.push(obj);
        if (tempArr.length === 2) {
          arrImg.push(tempArr);
          tempArr = [];
        }
      }
    });

    return arrImg;
  }


  render() {
    
    return (
      <div className="article__gallery">
        {
            this.getImages().map((obj, i) =>
                ( Array.isArray(obj) )
                ?
                <div className="small">
                  {
                    obj.map(
                      (img, x) =>
                    <img key={x} alt="" src={img.src} className={img.size}/>
                    )
                  }  
                </div>
                :
                <div className="big">
                  <img key={i} alt="" src={obj.src} className={obj.size}/>
                </div> 
            )
        }
      </div>
    )
  }

}
