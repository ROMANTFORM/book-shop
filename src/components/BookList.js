import { Link, useRouteMatch } from 'react-router-dom';
import books from './BookData';
import defaultImg from '../images/defaultIMG.png';
import { IoIosSearch } from "react-icons/io";



export default function BookList(){
    const {url} = useRouteMatch();

    return(
        <div className="booklist-section section">
            <div className="container">

                <div className="filter__container">
                    <div className='filter__search-wrap'>
                        <input className='filter__search-inpt' type='text' name='search'/>
                        <button className='filter__search-btn'><IoIosSearch /></button>
                    </div>
                    <div className='filter__select-wrap'>
                    <select name="selectedFruit">
                        <option value="apple">Choose price</option>
                        <option value="banana">before 20$</option>
                        <option value="orange">before 10$</option>
                    </select>
                    </div>
                </div>

                <div className="book__list"> 
                    {books?.map(({id, image,title, author, price}) => (
                        <Link to={`${url}/${id}`} key={id}>
                            <div className="book__item">
                                <div className='book__item-img-wrap'>
                                <img src={image ? image : defaultImg} alt='pic' className="book__item-img"/> 
                                </div>
                                
                                <div className="book__item-info">
                                    <h3>{title}</h3>
                                    <h5>Author: {author}</h5>
                                    <div className="book__item-controls">
                                        <span>Price: {price}$</span>
                                        <button className="btn book__item-btn">View</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    ))}                 
                </div>

            </div>    
        </div>
    )
};