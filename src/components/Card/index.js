import styles from './Card.module.scss'

console.log(styles);

function Card(props) {


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
                <button className="button" onClick={props.onPlus}>
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>

    )
}


export default Card;

