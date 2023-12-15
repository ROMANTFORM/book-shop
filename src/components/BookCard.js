import { useParams } from "react-router-dom";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import books from "./BookData";
import defaultImg from '../images/defaultIMG.png';
import { useState } from "react";



export default function BookCard(){
    const {id} = useParams();
    const {image, title, author, level, tags, description, price } = books.find(book => book.id === +id);
    
    const [counterValue, setCounterValue] = useState(1);

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
                                    <span onClick={() => setCounterValue(counterValue > 1 ? counterValue - 1 : counterValue)}><MdArrowLeft /></span>
                                    <span>{counterValue}</span>
                                    <span onClick={() => setCounterValue(counterValue + 1)}><MdArrowRight /></span>
                                </div>
                            </div>
                            <div className="bookcard__price-wrap">
                                <span>Total price:</span>
                                <span>{price * counterValue} $</span>
                            </div> 
                        </div>
                        <button className="btn">Buy</button>
                    </div>
                </div>
                <div className="bookcard__descr-section">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}