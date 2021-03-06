import React from 'react'
import styles from './Card.module.scss'

console.log(styles);

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img src="/img/heartoff.svg" alt="heartoff" />
            </div>
            <img width={133} height={112} src={props.imgeUrl} alt="Sneakers" />
            <h5> {props.title}</h5>
            <div className="d-flex justify-between align-center ">
                <div className="d-flex flex-column " >
                    <span>Price: </span>
                    <b>{props.price}</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus" />
            </div>
        </div>

    )
}


export default Card;

