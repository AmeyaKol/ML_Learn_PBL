import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Contents of the website: </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/introduction.jpeg'
              text='Basic and prerequisite information for Machine Learning'
              label='Introduction'
              path='/Features'
            />
            <CardItem
              src='images/visualization.jpg'
              text='Observe the working method of a Machine Learning algorithm'
              label='Visualization'
              path='/Features'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/referenceicon.png'
              text='Information about various machine learning algorithms and techniques'
              label='References'
              path='/References'
            />
            {/* <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/References'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;