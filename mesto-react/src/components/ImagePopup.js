function ImagePopup() {
    return (
        <div>
            <div className="popup popup_type_image">
                <div className="popup__image-content">
                    <button className="popup__close" type="button"></button>
                    <img className="popup__image" alt={''}
                         src={''}/>
                    <h3 className="popup__image-title">{''}</h3>
                </div>
            </div>
        </div>
    );
}

export default ImagePopup;