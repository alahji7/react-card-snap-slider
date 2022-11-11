import React from 'react';
import './App.css';

import ReactCardSlider from './components/ReactCardSlider';

const items = [
  {
    title: 'Persons',
    imageUrl: 'images/persons.jpg',
    imageAlt: 'persons',
    description: 'Two people sitting',
    buttonText: 'See more',
    buttonHref: 'test',
  },
  {
    title: 'Mountains',
    imageUrl: 'images/mountains.jpg',
    imageAlt: 'Mountains',
    description: 'Beautiful mountain scenary',
    buttonText: 'Details',
    buttonHref: 'test',
  },
  {
    title: 'Office',
    imageUrl: 'images/office.jpg',
    imageAlt: 'Office',
    description: 'Awesome office space',
    buttonText: 'Details',
    buttonHref: 'test',
  },
  {
    title: 'Waterfall',
    imageUrl: 'images/waterfall.jpg',
    imageAlt: 'Waterfall',
    description: 'magical waterfall',
    buttonText: 'Details',
    buttonHref: 'test',
  },
  {
    title: 'Persons',
    imageUrl: 'images/persons.jpg',
    imageAlt: 'persons',
    description: 'Two people sitting',
    buttonText: 'See more',
    buttonHref: 'test',
  },
  {
    title: 'Mountains',
    imageUrl: 'images/mountains.jpg',
    imageAlt: 'Mountains',
    description: 'Beautiful mountain scenary',
    buttonText: 'Details',
    buttonHref: 'test',
  },
  {
    title: 'Office',
    imageUrl: 'images/office.jpg',
    imageAlt: 'Office',
    description: 'Awesome office space',
    buttonText: 'Details',
    buttonHref: 'test',
  },
  {
    title: 'Waterfall',
    imageUrl: 'images/waterfall.jpg',
    imageAlt: 'Waterfall',
    description: 'magical waterfall',
    buttonText: 'Details',
    buttonHref: 'test',
  },
]

function App() {
  return (
    <div id='body'>
      <ReactCardSlider items={items} />
    </div>
  );
}

export default App;
