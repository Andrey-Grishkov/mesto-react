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


  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='page__content'>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <EditProfilePopup
        isOpen={isOpenEditProfile}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <PopupWithForm
        name='add-card'
        title='Новое место'
        btnTitle='Создать'
        isOpen={isOpenAddPlace}
        onClose={closeAllPopups}
      >
        <input
          className='popup__user-input popup__user-input_input_card-title'
          id='input-title'
          type='text'
          required
          placeholder='Название'
          minLength='2'
          maxLength='30'
          name='placeName'
        />
        <span className='popup__error' id='input-title-error'></span>
        <input
          className='popup__user-input popup__user-input_input_card-image'
          type='url'
          id='input-url'
          required
          placeholder='Ссылка на картинку'
          minLength='2'
          name='link'
        />
        <span className='popup__error' id='input-url-error'></span>
      </PopupWithForm>
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
