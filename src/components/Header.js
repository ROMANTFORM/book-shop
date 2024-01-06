import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Tooltip } from 'react-tooltip';
import { TiShoppingCart, TiUser } from "react-icons/ti";
import { connect } from "react-redux";

function Header({cart}){

    return(
        <div className="header-section">
            <div className="container">
               <nav className="header-navigation">
                    <Link className="logo-container" to="/booklist">
                        <span className="logo"></span>
                        <span className="logo-name">Book Shop</span>
                    </Link>
                    <div className="navigation-controls">
                       <Link className="cart-container" to="/cart" data-tooltip-id="my-tooltip" data-tooltip-content="go to your cart">
                            <TiShoppingCart />
                            <Tooltip id="my-tooltip" />
                            {cart.length > 0 ? <span className="cart-container__amount">{cart.length}</span> : ''}
                            
                       </Link>
                       <Link  to="/">
                            <button className="logout-btn btn">Log Out</button>
                       </Link>
                       <Link className="header-user-profile user-profile" to="/">
                            <span className="header-user-img user-img">
                                <TiUser/>
                            </span>
                            <span className="header-user-name user-name">Username</span>
                       </Link>
                    </div>
                </nav> 
            </div>
            
        </div>
    )
};

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps)(Header)