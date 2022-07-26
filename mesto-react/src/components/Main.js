import React from 'react';
import avatar from '../images/profile__avatar.png';
import edit from '../images/profile__edit-image.svg';
import add from '../images/profile__add-image.svg';
import api from './utils/api.js';
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api
            .getUserInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
        api
            .getCards()
            .then((res) => {
                setCards(res);
                console.log(res)
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <main className="content">
            <section className="profile">
                <img className="profile__avatar"
                     style={{ backgroundImage: `url(${userAvatar})` }} />
                <button className="profile__avatar-redaction" type="button" onClick={props.onEditAvatar}></button>
                <div className="profile__info">
                    <div className="profile__info-main">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit" type="button" onClick={props.onEditProfile}>
                            <img className="profile__edit-image"
                                 src={edit}
                                 alt="кнопка редактировать"/>
                        </button>
                    </div>
                    <p className="profile__user-about">{userDescription}</p>
                </div>
                <button className="profile__add" type="button" onClick={props.onAddPlace}>
                    <img className="profile__add-image" src={add}
                         alt="кнопка добавить"/>
                </button>
            </section>
            <section className="elements">
                <ul className="cards">
                    {cards.map((card) => (<Card
                        link={card.link}
                        name={card.name}
                        likes={card.likes}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;

/*
<li className="card">
    <button className="card__trach-icon" type="button" />
    <img
        className="card__image"
        alt={card.name}
        src={card.link}
        onClick={handleClick}
    />
    <div className="card__description">
        <h3 className="card__name">{card.name}</h3>
        <div className="card__like-container">
            <button className="card__like-button" type="button" />
            <p className="card__like-count">{card.likes.length}</p>
        </div>
    </div>
</li>
 */