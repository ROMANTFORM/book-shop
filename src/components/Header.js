import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { TiShoppingCart, TiUser } from "react-icons/ti";

export default function Header(){

    return(
        <div className="header-section">
            <div className="container">
               <nav className="header-navigation">
                    <Link className="logo-container" to="/booklist">
                        <span className="logo"></span>
                        <span className="logo-name">Book Shop</span>
                    </Link>
                    <div className="navigation-controls">
                       <Link className="cart-container" to="/cart">
                            <TiShoppingCart />
                       </Link>
                       <Link  to="/">
                            <button className="logout-btn">Log Out</button>
                       </Link>
                       <Link className="user-profile" to="/">
                            <span className="user-img">
                                <TiUser/>
                            </span>
                            <span className="user-name">Username</span>
                       </Link>
                    </div>
                </nav> 
            </div>
            
        </div>
    )
};