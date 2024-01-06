import { Link, useRouteMatch } from 'react-router-dom';
import defaultImg from '../images/defaultIMG.png';
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import { connect } from "react-redux";
import changeFilter from '../redux/filter/filter-actions';



function BookList({data}){
    const {url} = useRouteMatch();

    let filteredData = data;

    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');

    const handlerSelectFilter = (value) => {
        setSelectValue(value)
    }
    const handlerInputFilter = (value) => {
        setInputValue(value)
    }
    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue)
        return filteredData.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()));   
    }
    // const searchValue = (value) => {
    //    filteredData = books.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    //    resetFilter()
    // }
    // const resetFilter = () => {
    //     setInputValue('');
    // }
 
    if(selectValue){
        filteredData = data.filter(item => item.price < +selectValue)
    }
    // if(inputValue){
    //     filteredData = data.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()));    
    // }
    // const onSearch = (e) => {
    //     e.preventDefault();
        
    //     console.log(value)
    //    filteredData = filteredData.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));  
    //     // console.log(filteredData)
    // }

    return(
        <div className="booklist-section section">
            <div className="container">

                <div className="filter__container">
                    <form className='filter__search-wrap' onSubmit={handlerSubmit} >
                        <input 
                            className='filter__search-inpt' 
                            value={inputValue} 
                            type='text' 
                            name='search' 
                            onChange={event => handlerInputFilter(event.currentTarget.value)}
                        />
                        <button 
                            className='filter__search-btn'  
                            type='submit'
                        ><IoIosSearch /></button>
                    </form>

                    <div className='filter__select-wrap'>
                    <select 
                        onChange={(event) => handlerSelectFilter(event.currentTarget.value)} 
                        name="selectedFruit"
                    >
                        <option value="" >Choose price</option>
                        <option value="20" >before 20$</option>
                        <option value="10" >before 10$</option>
                    </select>
                    </div>
                </div>

                <div className="book__list"> 
                    {filteredData?.map(({id, image,title, author, price}) => (
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

const mapStateToProps = state => ({
    data: state.data,
    // value: state.filter
});

const mapDispatchToProps = dispatch => ({
    // onChange: (e) => dispatch(changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList);