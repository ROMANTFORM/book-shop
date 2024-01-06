import { TiShoppingCart } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import defaultImg from '../images/defaultIMG.png';
import { connect } from "react-redux";
import * as cartActions from '../redux/cart/cart-actions';

function Cart({cart, onDeleteItem}){

let totalCommonPrice = cart.reduce((acc, item) => acc + item.totalPrice , 0);
  
    return(
        <div className="cart-section section">

            {cart.length > 0 ?
            <>
                <ul className="cart-items-list">
                    {cart.map(item => (
                        <li key={item.id} className="cart-item">
                            <div className="cart-item__img-wrap">
                                <img src={item.image? item.image : defaultImg} alt="pic" className="cart-item__img"/>
                                <span>{item.title}</span>
                            </div>
                            <span className="cart-item__amount">Amount: {item.value}</span>
                            <span className="cart-item__price">{item.totalPrice}$</span>
                            <button type="button" className="cart-item__btn" onClick={() => onDeleteItem(item.id)}><RiDeleteBin6Line /></button>
                        </li>
                    ))}
                </ul> 
                <div className="cart__common-price">Total price: {totalCommonPrice}$</div>
            </>
            : 
            <div className="cart-empty__wrapper"><span>Cart is Empty...</span><TiShoppingCart/></div>
            }
                  
        </div>
    )
};

const mapStateToProps = state => ({cart: state.cart});

const mapDispatchToProps = dispatch => ({
    onDeleteItem: id => dispatch(cartActions.deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)