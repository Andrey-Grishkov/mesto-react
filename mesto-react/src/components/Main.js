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
            .catch((err) => console.log(`Ошибка: ${err}`));
    }, []);

    React.useEffect(() => {
        api
            .getCards()
            .then((res) => {
                setCards(res);
            })
            .catch((err) => console.log(`Ошибка: ${err}`));
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
                    {cards.map((card) => (
                        <Card
                        itemCard={card}
                        link={card.link}
                        name={card.name}
                        likes={card.likes}
                        key={card._id}
                        cardClick={props.onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;