import pic from '../images/exemple.jpg';
import { IoIosSearch } from "react-icons/io";


export default function BookList(){
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
                    
                    <div className="book__item">
                        <div className='book__item-img-wrap'>
                           <img src={pic} alt='pic' className="book__item-img"/> 
                        </div>
                        
                        <div className="book__item-info">
                            <h3>Name: </h3>
                            <h4>Author: </h4>
                            <div className="book__item-controls">
                                <span>Price:</span>
                                <button className="btn book__item-btn">View</button>
                            </div>
                        </div>
                    </div>
                    <div className="book__item">
                        <div className='book__item-img-wrap'>
                           <img src={pic} alt='pic' className="book__item-img"/> 
                        </div>
                        
                        <div className="book__item-info">
                            <h3>Name: </h3>
                            <h4>Author: </h4>
                            <div className="book__item-controls">
                                <span>Price:</span>
                                <button className="btn book__item-btn">View</button>
                            </div>
                        </div>
                    </div>
                    <div className="book__item">
                        <div className='book__item-img-wrap'>
                           <img src={pic} alt='pic' className="book__item-img"/> 
                        </div>
                        
                        <div className="book__item-info">
                            <h3>Name: </h3>
                            <h4>Author: </h4>
                            <div className="book__item-controls">
                                <span>Price:</span>
                                <button className="btn book__item-btn">View</button>
                            </div>
                        </div>
                    </div>
                    <div className="book__item">
                        <div className='book__item-img-wrap'>
                           <img src={pic} alt='pic' className="book__item-img"/> 
                        </div>
                        
                        <div className="book__item-info">
                            <h3>Name: </h3>
                            <h4>Author: </h4>
                            <div className="book__item-controls">
                                <span>Price:</span>
                                <button className="btn book__item-btn">View</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}