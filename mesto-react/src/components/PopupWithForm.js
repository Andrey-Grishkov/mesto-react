function PopupWithForm(props) {
    return (
        <div>
            <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_is-opened'}`}>
                <div className="popup__content">
                    <button className="popup__close" type="button" onClick={props.onClose}></button>
                    <h3 className="popup__title">{props.title}</h3>
                    <form className="popup__form" name={`${props.name}Form`} noValidate>
                    {props.children}
                    <button className="popup__button-submit" type="submit">{props.btnTitle}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopupWithForm;

/**
 <div className="popup popup_type_profile">
 <div className="popup__content">
 <button className="popup__close" type="button"></button>
 <h3 className="popup__title">Редактировать профиль</h3>
 <form className="popup__form" name="profileForm" noValidate>
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
 <button className="popup__button-submit" type="submit">Сохранить</button>
 </form>
 </div>
 </div>


 <div className="popup popup_type_add-card">
 <div className="popup__content">
 <button className="popup__close" type="button"></button>
 <h3 className="popup__title">Новое место</h3>
 <form className="popup__form" name="profileForm" noValidate>
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
 <button className="popup__button-submit" type="submit">Создать</button>
 </form>
 </div>
 </div>

 <div className="popup popup_type_delete-card">
 <div className="popup__content">
 <button className="popup__close" type="button"></button>
 <h3 className="popup__title">Вы уверены?</h3>
 <button className="popup__button-submit popup__delete-card-submit" type="submit">Да</button>
 </div>
 </div>

 <div className="popup popup_type_avatar">
 <div className="popup__content">
 <button className="popup__close" type="button"></button>
 <h3 className="popup__title">Обновить аватар</h3>
 <form className="popup__form" name="profileForm" noValidate>
 <input
 className="popup__user-input popup__user-input_input_card-image"
 type="url"
 id="input-avatar-url"
 required
 placeholder="Ссылка на аватар"
 minLength="2"
 name="link"/>
 <span className="popup__error" id="input-avatar-url-error"></span>
 <button className="popup__button-submit" type="submit">Сохранить</button>
 </form>
 </div>
 </div>

 <div className="popup popup_type_image">
 <div className="popup__image-content">
 <button className="popup__close" type="button"></button>
 <img className="popup__image"/>
 <h3 className="popup__image-title"></h3>
 </div>
 </div>
 */