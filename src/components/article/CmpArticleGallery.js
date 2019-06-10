import React, { Component } from 'react';
import './CmpArticleGallery.css';


export class CmpArticleGallery extends Component {

  getImages() {
    let returnedArray = [];

    var tempArr = [];
    this.props.images.forEach((elem, i) => {
      var obj = {};
      obj.src = elem.src;
      obj.alt = elem.alt;

      //Only some images will be big
      if(i%3 === 0) {
        returnedArray.push(obj);
      }
      else {    
        tempArr.push(obj);
        if (tempArr.length === 2) {
          returnedArray.push(tempArr);
          tempArr = [];
        }
      }

    });

    return returnedArray;
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
                    <img key={x} alt={img.alt} src={img.src} className={img.size}/>
                    )
                  }  
                </div>
                :
                <div className="big">
                  <img key={i} alt={obj.alt} src={obj.src} className={obj.size}/>
                </div> 
            )
        }
      </div>
    )
  }

}