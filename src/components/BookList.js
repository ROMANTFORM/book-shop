import { useEffect, useState } from 'react';

import defaultImg from '../images/defaultIMG.png';
import { IoIosSearch } from "react-icons/io";



export default function BookList(){

    const [fetchData, setFetchData] = useState();

    const api = 'http://localhost:8080/books';

    useEffect(() => {
        fetch(api)
        .then(res => res.json())
        .then(data => setFetchData(data))
    }, [api])

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
                    {fetchData?.map(item =>(
                        <div className="book__item" key={item.id}>
                            <div className='book__item-img-wrap'>
                            <img src={item.image ? item.image : defaultImg} alt='pic' className="book__item-img"/> 
                            </div>
                            
                            <div className="book__item-info">
                                <h3>{item.title}</h3>
                                <h5>Author: {item.author}</h5>
                                <div className="book__item-controls">
                                    <span>Price: {item.price}$</span>
                                    <button className="btn book__item-btn">View</button>
                                </div>
                            </div>
                        </div>
                    ))}                 
                </div>

            </div>    
        </div>
    )
};