import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card({ itemCard, link, name, likes, cardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = itemCard.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__delete ${isOwn ? '' : 'card__delete_hidden'}`
  );

  function handleClick() {
    cardClick(itemCard);
  }

  return (
    <div>
      <li className='card'>
        <button className={cardDeleteButtonClassName} type='button'></button>
        <img
          className='card__image'
          style={{ backgroundImage: `url(${link})` }}
          onClick={handleClick}
          alt={name}
          src={link}
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