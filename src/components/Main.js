import React from 'react';
import avatar from '../images/profile__avatar.png';
import edit from '../images/profile__edit-image.svg';
import add from '../images/profile__add-image.svg';
import api from '../utils/api.js';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {

  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }





  return (
    <main className='content'>
      <section className='profile'>
        <img
          className='profile__avatar'
          style={{ backgroundImage: `url(${currentUser !== null ? currentUser.avatar:''})` }}
          src={currentUser !== null ? currentUser.avatar:''}
        />
        <button
          className='profile__avatar-redaction'
          type='button'
          onClick={currentUser !== null ? props.onEditAvatar:''}
        ></button>
        <div className='profile__info'>
          <div className='profile__info-main'>
            <h1 className='profile__name'>{currentUser !== null ? currentUser.name:''}</h1>
            <button
              className='profile__edit'
              type='button'
              onClick={props.onEditProfile}
            >
              <img
                className='profile__edit-image'
                src={edit}
                alt='кнопка редактировать'
              />
            </button>
          </div>
          <p className='profile__user-about'>{currentUser !== null ? currentUser.about:''}</p>
        </div>
        <button
          className='profile__add'
          type='button'
          onClick={props.onAddPlace}
        >
          <img className='profile__add-image' src={add} alt='кнопка добавить' />
        </button>
      </section>
      <section className='elements'>
        <ul className='cards'>
          {cards.map((card) => (
            <Card
              itemCard={card}
              link={card.link}
              name={card.name}
              likes={card.likes}
              key={card._id}
              cardClick={props.onCardClick}
              onCardLike={handleCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;