import { TiUser } from "react-icons/ti";

export default function Signin(){
    return(
        <div className="signin-section section">
            <form className="signin__form">
                <div className="user-profile signin-user-profile">
                    <span className="user-img signin-user-img">
                        <TiUser/>
                    </span>
                    <span className="user-name signin-user-name">Username</span>
                </div>

                <input type="text" className="signin__input input" name="name" placeholder="Enter your name..."></input>
                <input type="email" className="signin__input input" name="email" placeholder="Enter your email..."></input>
                <button type="button" className="signin__btn btn">Sign-In</button>
            </form>
            
        </div>
    )
}