import React from 'react'
import styles from './Card.module.scss'


function Card({ title, price, imageUrl, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ title, price, imageUrl });
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/heartoff.svg" alt="heartoff" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5> {title}</h5>
            <div className="d-flex justify-between align-center ">
                <div className="d-flex flex-column " >
                    <span>Price: </span>
                    <b>{price}</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus" />
            </div>
        </div>

    )
}


export default Card;

