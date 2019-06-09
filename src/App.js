import React, { Component } from 'react';

import './App.css';

import PageTemplate from './components/shared/PageTemplate'
import CmpArticle from './components/article/CmpArticle'
import CmpArticleAside from './components/article/CmpArticleAside'

import DATA from './data/data.js';
import JSLibrary from './libraries/JSLibrary.js'


export class App extends Component {


  componentWillMount() {
    
    var deabouncedScrollListener = JSLibrary.debounce(function () {

      let scrollPosition = window.scrollY;
      let header = document.querySelector('header');
      let article = document.querySelector('article');
      let aside = document.querySelector('aside');
      let shadow = document.querySelector('.shadow');
      let main = document.querySelector('main');

      console.log('scrollPosition: ' + scrollPosition);

      if(scrollPosition > 180) {
        header.classList.remove('fixed');
        header.style.top = '180px';
        main.style.marginTop = 0;
      }

      if(scrollPosition <= 180) {
        header.classList.add('fixed');
        header.style.top = '0';
        main.style.marginTop = '5rem';
      }


      if(scrollPosition > 230 && scrollPosition < 360) {
        var originalPositionArticle = 460;
        var originalPositionAside = 360;
        var offset = scrollPosition - 230;
        console.log(offset);
        var newPositionArticle = originalPositionArticle - offset;
        var newPositionAside = originalPositionAside + (offset/2);

        article.style.top = newPositionArticle + 'px';
        aside.style.top = newPositionAside + 'px';
        shadow.style.top = newPositionArticle + 'px';
      }

      if(scrollPosition > 420) {
        shadow.classList.add('expanded');
      }

      if(scrollPosition < 420) {
        shadow.classList.remove('expanded');
      }
      
    }, 5);
    
    window.addEventListener('scroll', deabouncedScrollListener);

    
  }

  render() {
    return (
      <PageTemplate data={DATA}>
        <main>
          <CmpArticle article={DATA.article} images={DATA.images} cards={DATA.cards}/>
          <CmpArticleAside cards={DATA.cards}/>
        </main>
      </PageTemplate>
    )
  }

}