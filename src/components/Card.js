import React from 'react';

function Card(props) {
  function handleClick() {
    props.cardClick(props.itemCard);
  }

  return (
    <div>
      <li className='card'>
        <button className='card__delete' type='button'></button>
        <img
          className='card__image'
          style={{ backgroundImage: `url(${props.link})` }}
          onClick={handleClick}
        />
        <div className='card__info'>
          <h2 className='card__title'>{props.name}</h2>
          <div className='card__like-container'>
            <button className='card__like' type='button'></button>
            <div className='card__like-counter'>{props.likes.length}</div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;