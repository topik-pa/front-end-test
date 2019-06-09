import React from 'react';
import { Component } from 'react';
import './App.css';
import PageTemplate from './components/shared/PageTemplate'
import CmpArticle from './components/article/CmpArticle'
import CmpArticleAside from './components/article/CmpArticleAside'

import DATA from './data/data.js';

export class App extends Component {


  componentWillMount() {
    console.log('PIppo');

    //All the library functiona are collected inside AMELibrary
    var AMELibrary = (function () {
      return {
          debounce: function (func, wait, immediate) {
              var timeout;
              return function () {
                  var context = this,
                      args = arguments;
                  var later = function () {
                      timeout = null;
                      if (!immediate) func.apply(context, args);
                  };
                  var callNow = immediate && !timeout;
                  clearTimeout(timeout);
                  timeout = setTimeout(later, wait);
                  if (callNow) func.apply(context, args);
              };
        }
      }; 
    })();

    var deabouncedScrollListener = AMELibrary.debounce(function () {
      var scrollPosition = window.scrollY;
      var scrollSize = document.documentElement.offsetHeight - window.innerHeight;
      
      console.log('scrolled: ' + scrollPosition);
      //console.log('size: ' + scrollSize);

      if(scrollPosition > 220) {
        document.querySelector('header').classList.remove('fixed');

        document.querySelector('header').style.top = '220px';
      }

      if(scrollPosition <= 220) {
        document.querySelector('header').classList.add('fixed');

        document.querySelector('header').style.top = '0';
      }


      if(scrollPosition > 180 && scrollPosition < 360) {
        var originalPosition = 460;
        var offset = scrollPosition - 180;
        //console.log(offset);

        var newPosition = originalPosition - offset;

        document.querySelector('article').style.top = newPosition + 'px';
        document.querySelector('.shadow').style.top = newPosition + 'px';

        /*document.querySelector('aside').style.position = 'fixed';
        document.querySelector('aside').style.top = '5rem';
        document.querySelector('aside').style.right = '26rem';*/

      }

      if(scrollPosition > 360) {
        document.querySelector('.shadow').classList.add('expanded');
      }

      if(scrollPosition < 360) {
        document.querySelector('.shadow').classList.remove('expanded');
      }


      /*if(scrollPosition > 360) {
        document.querySelector('aside').style.position = 'fixed';
        document.querySelector('aside').style.top = '3rem';
        document.querySelector('aside').style.right = '26rem';
      }

      if(scrollPosition <= 360) {
        document.querySelector('aside').style.position = 'absolute';
        document.querySelector('aside').style.top = '360px';
        document.querySelector('aside').style.right = '0';
      }*/

      
    }, 1);
    
    window.addEventListener('scroll', deabouncedScrollListener);

    
  }

  render() {
    // const { page } = this.data
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



/*function App() {
  return (
    <PageTemplate>
        <main>
          <CmpArticle />
        </main>
    </PageTemplate>
  );
}

export default App;*/
