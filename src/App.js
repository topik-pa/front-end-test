import React, { Component } from 'react';

import './App.css';

import PageTemplate from './components/shared/PageTemplate'
import CmpArticle from './components/article/CmpArticle'
import CmpArticleAside from './components/article/CmpArticleAside'

import DATA from './data/data.js';
import JSLibrary from './libraries/JSLibrary.js'


export class App extends Component {

  componentDidMount() {

    const defaults = {
      stops: {
        headerFixed: 180,
        parallaxStart: 230,
        parallaxStop: 360,
        whiteShadow: 420
      },
      elements: {
        header: document.querySelector('header'),
        article: document.querySelector('article'),
        aside: document.querySelector('aside'),
        shadow: document.querySelector('.shadow'),
        main: document.querySelector('main'),
      },
      articleOriginalPosition: 460,
      asideOriginalPosition: 360
    }    
    
    var deabouncedScrollListener = JSLibrary.debounce(function (params) {
      let scrollPosition = window.scrollY;

      //Header
      if(scrollPosition > params.stops.headerFixed) {
        params.elements.header.classList.remove('fixed');
        params.elements.header.style.top = params.stops.headerFixed + 'px';
        params.elements.main.style.marginTop = 0;
      }
      if(scrollPosition <= params.stops.headerFixed) {
        params.elements.header.classList.add('fixed');
        params.elements.header.style.top = '0';
        params.elements.main.style.marginTop = '5rem';
      }


      //Article
      if(scrollPosition > params.stops.parallaxStart && scrollPosition < params.stops.parallaxStop) {
        var originalPositionArticle = params.articleOriginalPosition;
        var originalPositionAside = params.asideOriginalPosition;
        var offset = scrollPosition - params.stops.parallaxStart;
        var newPositionArticle = originalPositionArticle - offset;
        var newPositionAside = originalPositionAside + (offset/2);

        params.elements.article.style.top = newPositionArticle + 'px';
        params.elements.aside.style.top = newPositionAside + 'px';
        params.elements.shadow.style.top = newPositionArticle + 'px';
      }

      //White shadow
      if(scrollPosition > params.stops.whiteShadow) {
        params.elements.shadow.classList.add('expanded');
      }
      if(scrollPosition < params.stops.whiteShadow) {
        params.elements.shadow.classList.remove('expanded');
      }
      
    }, 10);
    
    //Parallax only on big screen due to performance
    if(!window.matchMedia("(max-width: 768px)").matches) {
      //Start addind fixed header
      defaults.elements.header.classList.add('fixed');
      defaults.elements.main.style.marginTop = '5rem';
      window.addEventListener('scroll', function() {
        deabouncedScrollListener(defaults);
      });
    }
    

    
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