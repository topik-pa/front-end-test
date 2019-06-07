import React from 'react';
import { Component } from 'react';
import './App.css';
import PageTemplate from './components/shared/PageTemplate'
import CmpArticle from './components/article/CmpArticle'



export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {
        site: {
          name: 'Asdrubale',
          pages: [
            {
              page: 'Lorem',
              href: '!#'
            },
            {
              page: 'Ipsum',
              href: '!#'
            },
            {
              page: 'Dolor',
              href: '!#'
            },
          ]
        },
        article: {
          title: 'Quann steva là in Honduras, steva rint a na capanna e nziemm a me ce steva.',
          subtitle: 'Nun ce stà mammà là dint!',
          text: 'E intant\' e sord tuoj nunn arrivavan, \' Na sear gli honduregni me mettetter\' nu machete n\'man e gridavan\': Accirel\'! Accirel\'! Je pregav\'.pregav\' ca corcrun\' me venev\' a salva\' , ca tu me veniv\' a salva\'!',
          author: 'lorem Ipsum',
          avatar: 'https://placekitten.com/g/40/40',
          socials: [
            {
              name: 'Social 1',
              icon: 'android'
            },
            {
              name: 'Social 2',
              icon: 'android'
            },
            {
              name: 'Social 3',
              icon: 'android'
            }
          ],
          gallery: [
            {
              image: 'https://placekitten.com/g/100/100',
              alt: 'Alt descriprion for this image',
            },
            {
              image: 'https://placekitten.com/g/100/100',
              alt: 'Alt descriprion for this image',
            },
            {
              image: 'https://placekitten.com/g/100/100',
              alt: 'Alt descriprion for this image',
            },
            {
              image: 'https://placekitten.com/g/100/100',
              alt: 'Alt descriprion for this image',
            },
            {
              image: 'https://placekitten.com/g/100/100',
              alt: 'Alt descriprion for this image',
            },
            {
              image: 'https://placekitten.com/g/100/100',
              alt: 'Alt descriprion for this image',
            }
          ]
        },
        boxes: [
          {
            icon: 'android',
            subtitle: 'Sapeva pure ca oggi je e te steverna inda \'sta machina',
            title: 'Quann\' tu me purtast\' a spara\' chillu cristian\' p\'a prima vota.',
            cta: 'Clicca qui'
          },
          {
            title: 'Quann\' Salvatore Conte è turnat\', quann\' Danielino è muort\' , iss, \'o sapeva.',
          },
          {
            title: 'Mamma\' se n\'è ghiuta! Tu ci credi in Dio?',
          }
        ]
      }
    }
  }

  render() {
    // const { page } = this.data
    return (
      <PageTemplate>
        <main>
          <CmpArticle />
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
