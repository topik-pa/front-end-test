import React from 'react';
import { Component } from 'react';
import './App.css';
import PageTemplate from './components/shared/PageTemplate'
import CmpArticle from './components/article/CmpArticle'

import DATA from './data/data.js';

export class App extends Component {

  render() {
    // const { page } = this.data
    return (
      <PageTemplate data={DATA}>
        <main>
          <CmpArticle article={DATA.article} images={DATA.images} cards={DATA.cards}/>
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
