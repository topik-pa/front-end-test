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

    //var that = this;

    const MAX_IMAGES = 12;
    let images = this.props.images;

    let over = images.length % 3;

    allImages = images.slice(0, images.length - over);

    if(allImages.length > MAX_IMAGES) {
      allImages.length = MAX_IMAGES;
    }

    //let arr = [];

    //var container = {};

    //var smallAdded = 0;

    var tempArr = [];

    allImages.forEach((elem, i, arr) => {

      //var smallAdded = 0;

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


      //obj.size = 'small';

      /*if(arr.length == 9 && i==0) {
        obj.size = 'big';
      }
      if(arr.length == 6 && ( i==0 || i==3 ) )  {
        obj.size = 'big';
      }
      if(arr.length == 3 && ( i==0 || i==1 || i==2 )) {
        obj.size = 'big';
      }*/

      //var objImg = {};

      /*if(i%3 == 0) {
        
        var objImg = {};

        var obj = {};
        obj.src = elem.src;
        obj.alt = elem.alt;
        
      }
      else {
        

        Object.assign(objImg, obj);
      }*/


      
      //debugger
      //arrImg.push(obj);
    });

    //debugger
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

  componentWillMount() {

    //debugger

    
    
 

    
  }

}


