function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heartoff.svg" alt="heartoff" />
            </div>
            <img width={133} height={112} src="/img/sneakers/JordanAir.jpg" alt="Sneakers" />
            <h5>Man sneakers Jordan Air Jordan 11</h5>
            <div className="d-flex justify-between align-center ">
                <div className="d-flex flex-column " >
                    <span>Price: </span>
                    <b>$ 12</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>

    )
}


export default Card;