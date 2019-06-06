import React from 'react';
import './App.css';
import PageTemplate from './components/shared/PageTemplate'
import CmpArticle from './article/CmpArticle'

function App() {
  return (
    <PageTemplate>
        <main>
          <CmpArticle />
        </main>
    </PageTemplate>
  );
}

export default App;
