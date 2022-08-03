import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isOpenEditAvatar, setIsOpenEditAvatar] = React.useState(false);
  const [isOpenEditProfile, setIsOpenEditProfile] = React.useState(false);
  const [isOpenAddPlace, setIsOpenAddPlace] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isOpenImage, setIsOpenImage] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
      api.
      getUserInfo()
        .then(res => setCurrentUser(res))
        .catch((err) => console.log(`Ошибка: ${err}`));
    }, [])

  const handleEditAvatarClick = () => {
    setIsOpenEditAvatar(true);
  };

  const handleEditProfileClick = () => {
    setIsOpenEditProfile(true);
  };

  const handleAddPlaceClick = () => {
    setIsOpenAddPlace(true);
  };

  const handleCardClick = (selectedCard) => {
    setSelectedCard(selectedCard);
    setIsOpenImage(true);
  };

  const closeAllPopups = () => {
    setIsOpenEditAvatar(false);
    setIsOpenEditProfile(false);
    setIsOpenAddPlace(false);
    setIsOpenImage(false);
  };

  const handleUpdateUser = (userInfo) => {
    api.
    addUserInfo(userInfo)
      .then((res) => {
      setCurrentUser(res);
      closeAllPopups()})
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  const handleUpdateAvatar = (data) => {
    api.
    addAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups()})
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  const [cards, setCards] = React.useState([]);

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

  function handleCardDelete(card) {
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='page__content'>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />
      <EditProfilePopup
        isOpen={isOpenEditProfile}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <AddPlacePopup
        isOpen={isOpenAddPlace}
        onClose={closeAllPopups}
      />
      <EditAvatarPopup
        isOpen={isOpenEditAvatar}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateAvatar}
      />
      <PopupWithForm
        name='delete-card'
        title='Вы уверены?'
        btnTitle='Да'
      ></PopupWithForm>
      <ImagePopup
        isOpen={isOpenImage}
        name={selectedCard && selectedCard.name}
        link={selectedCard && selectedCard.link}
        onClose={closeAllPopups}
      />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
