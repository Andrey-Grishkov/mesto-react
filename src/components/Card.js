import React from 'react';

function Card({ itemCard, link, name, likes, cardClick }) {
  function handleClick() {
    cardClick(itemCard);
  }

  return (
    <div>
      <li className='card'>
        <button className='card__delete' type='button'></button>
        <img
          className='card__image'
          style={{ backgroundImage: `url(${link})` }}
          onClick={handleClick}
          alt={name}
        />
        <div className='card__info'>
          <h2 className='card__title'>{name}</h2>
          <div className='card__like-container'>
            <button className='card__like' type='button'></button>
            <div className='card__like-counter'>{likes.length}</div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;