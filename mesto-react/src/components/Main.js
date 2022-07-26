import avatar from '../images/profile__avatar.png';
import edit from '../images/profile__edit-image.svg';
import add from '../images/profile__add-image.svg';
import PopupWithForm from "./PopupWithForm";


function Main(props) {
    return (
        <main className="content">
            <section className="profile">
                <img className="profile__avatar" src={avatar}
                     alt="фотография пользователя"/>
                <button className="profile__avatar-redaction" type="button" onClick={props.onEditAvatar}></button>
                <div className="profile__info">
                    <div className="profile__info-main">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button className="profile__edit" type="button" onClick={props.onEditProfile}>
                            <img className="profile__edit-image"
                                 src={edit}
                                 alt="кнопка редактировать"/>
                        </button>
                    </div>
                    <p className="profile__user-about">Исследователь океана</p>
                </div>
                <button className="profile__add" type="button" onClick={props.onAddPlace}>
                    <img className="profile__add-image" src={add}
                         alt="кнопка добавить"/>
                </button>
            </section>
            <section className="elements">
                <ul className="cards">
                </ul>
            </section>
        </main>
    );
}

export default Main;