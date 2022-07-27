import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
    const [isOpenEditAvatar, setIsOpenEditAvatar] = React.useState(false);
    const [isOpenEditProfile, setIsOpenEditProfile] = React.useState(false);
    const [isOpenAddPlace, setIsOpenAddPlace] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState([]);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

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

  return (
        <div className="page__content">
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <Footer />
            <PopupWithForm
                name="profile"
                title="Редактировать профиль"
                btnTitle="Сохранить"
                isOpen={isOpenEditProfile}
                onClose={closeAllPopups}
            >
                <input className="popup__user-input popup__user-input_input_name" type="text" id="input-name"
                       required
                       placeholder="Введите имя"
                       minLength="2"
                       maxLength="40"
                       name="userName"/>
                <span className="popup__error" id="input-name-error"></span>
                <input
                    className="popup__user-input popup__user-input_input_user-about"
                    type="text"
                    id="input-text"
                    required
                    placeholder="Введите информацию о себе"
                    minLength="2"
                    maxLength="200"
                    name="userAboutInformation"/>
                <span className="popup__error" id="input-text-error"></span>
            </PopupWithForm>
            <PopupWithForm
                name="add-card"
                title="Новое место"
                btnTitle="Создать"
                isOpen={isOpenAddPlace}
                onClose={closeAllPopups}
            >
                <input
                    className="popup__user-input popup__user-input_input_card-title"
                    id="input-title"
                    type="text"
                    required
                    placeholder="Название"
                    minLength="2"
                    maxLength="30"
                    name="placeName"/>
                <span className="popup__error" id="input-title-error"></span>
                <input
                    className="popup__user-input popup__user-input_input_card-image"
                    type="url"
                    id="input-url"
                    required
                    placeholder="Ссылка на картинку"
                    minLength="2"
                    name="link"/>
                <span className="popup__error" id="input-url-error"></span>
            </PopupWithForm>
            <PopupWithForm
                name="avatar"
                title="Обновить аватар"
                btnTitle="Сохранить"
                isOpen={isOpenEditAvatar}
                onClose={closeAllPopups}
            >
                <input
                    className="popup__user-input popup__user-input_input_card-image"
                    type="url"
                    id="input-avatar-url"
                    required
                    placeholder="Ссылка на аватар"
                    minLength="2"
                    name="link"/>
                <span className="popup__error" id="input-avatar-url-error"></span>
            </PopupWithForm>
            <PopupWithForm
                name="delete-card"
                title="Вы уверены?"
                btnTitle="Да"
            >
            </PopupWithForm>
            <ImagePopup
                isOpen={isOpenImage}
                name={selectedCard.name}
                link={selectedCard.link}
                onClose={closeAllPopups}
            />
        </div>
  );
}

export default App;
