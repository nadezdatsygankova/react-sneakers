function Drawer({ onClose, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30 " >
                    Cart:
                    <img onClick={onClose} className=" cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>

                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                className="cartItemImg"></div>
                            <div className="mr-20 flex ">
                                <p className="mb-5">{obj.title} </p>
                                <b>{obj.price}</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                        </div>
                    ))}
                </div>
                <div className="cartTotalBlock">
                    <ul >
                        <li >
                            <span>Order Summary </span>
                            <div></div>
                            <b>$200.00</b>
                        </li>
                        <li >
                            <span>Taxes</span>
                            <div></div>
                            <b>$10.00 </b>
                        </li>
                    </ul>
                    <button className="greenButton">Checkout <img scr="/img/arrow.svg" alt="Arrow" /> </button>
                </div>
            </div>
        </div >
    );
}




export default Drawer;