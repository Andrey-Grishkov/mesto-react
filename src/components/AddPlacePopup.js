import PopupWithForm from './PopupWithForm';
import React from 'react';

function AddPlacePopup({isOpen, onClose}) {
  return (
    <PopupWithForm
      name='add-card'
      title='Новое место'
      btnTitle='Создать'
      isOpen={isOpen}
      onClose={onClose}
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
  );
}

export default AddPlacePopup;