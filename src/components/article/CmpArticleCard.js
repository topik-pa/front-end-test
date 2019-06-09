import React from 'react';
import { Component } from 'react';
import './CmpArticleCard.css';

import CmpArticleCardButton from './CmpArticleCardButton';


export class CmpArticleCard extends Component {

  state = {
    popupMode: '--hide',
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ popupMode: '--show' });
  }
  

  render() {
    const {data, index} = this.props;
    return (
      <div className="card">
        <div className="card__number">0{index+1}</div>
          <i className="card__icon material-icons">
            {data.icon} 
          </i>
        <div className="card__subtitle">
          {data.subtitle} 
        </div>
        <div className="card__title">
          {data.title}
        </div>
        
        <CmpArticleCardButton cta={data.cta} onClick={this.handleClick}/>

        <div className={"card__popup" + this.state.popupMode}>
          <div>
            <div className="top">{data.title}</div>
            <div className="bottom">
            {
              data.images 
              ?
                data.images.map((img, i) =>
                  <img src={img.src} alt={img.alt} index={img.i} />
                )
              :
              null
            } 
            </div>
          </div>
        </div>    
      </div>
    )
  }

}
