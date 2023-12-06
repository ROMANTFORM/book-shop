import { TiShoppingCart } from "react-icons/ti";

export default function Cart(){
    let visible = false;
    return(
        <div className="cart-section section">
            
            {!visible && <div className="cart-empty__wrapper"><span>Cart empty...</span><TiShoppingCart/></div>}
            {visible && <ul className="cart-items-list">
                <li className="cart-item">
                    <span>Name:</span>
                    <span>Amount:</span>
                    <span>Price:</span>
                </li>
                <li className="cart-item">
                    <span>Wensday</span>
                    <span>1</span>
                    <span>Price: 10$</span>
                </li>
            </ul>}
            
        </div>
    )
}