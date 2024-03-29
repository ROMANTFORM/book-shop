import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import * as counterActions from '../redux/counter/counter-actions';
import * as cartActions from '../redux/cart/cart-actions';

import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import defaultImg from '../images/defaultIMG.png';

function BookCard({value, data, onIncrement, onDecrement, addItem}){

    const {id} = useParams();
    const {image, title, author, level, tags, description, price } = data.find(book => book.id === +id);
    
    let totalPrice = price * value;

    return(
        <div className="bookcard-section section">
            <div className="container">
                <div className="bookcard__main-section">
                    <div className="bookcard__img-block">
                        <img className="bookcard__img" src={image ? image : defaultImg} alt="pic"></img>
                    </div>
                    <div className="bookcard__info-block">
                        <h2>{title}</h2>
                        <p>Author: {author}</p>
                        <p>Level: {level}</p>
                        <p>Tags: {tags.join(", ")}</p>
                    </div>
                    <div className="bookcard__buy-block">
                        <div>
                            <div className="bookcard__price-wrap">
                                <span>Price:</span>
                                <span>{price} $</span>
                            </div>
                            <div className="bookcard__buy-block-counter">
                                <span>Count:</span>
                                <div className="bookcard__buy-counter-container">
                                    <span onClick={onDecrement}><MdArrowLeft /></span>
                                    <span>{value}</span>
                                    <span onClick={onIncrement}><MdArrowRight /></span>
                                </div>
                            </div>
                            <div className="bookcard__price-wrap">
                                <span>Total price:</span>
                                <span>{totalPrice} $</span>
                            </div> 
                        </div>
                        <button className="btn" onClick={() => addItem({id, image, title, totalPrice, value })}>Add to Cart</button>
                    </div>
                </div>
                <div className="bookcard__descr-section">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
};

const mapStateToProp = state => ({value: state.value, data: state.data});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(counterActions.increment(1)),
    onDecrement: () => dispatch(counterActions.decrement(1)),
    addItem: (item) => dispatch(cartActions.addItemToCart(item))
});

export default connect(mapStateToProp, mapDispatchToProps)(BookCard);