import { connect } from "react-redux";
import { useState } from "react";
import * as authActions from "../redux/auth/auth-actions";

import { TiUser } from "react-icons/ti";

function Signin({auth, onAuth}){

const [formValue, setFormValue] = useState({
    name: '',
    email: '',
});


const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue({...formValue, [name]: value})
};

const handleSubmit = e => {
    e.preventDefault();
   onAuth()
    console.log("formValue--->", formValue);
    console.log("auth--->", auth)
}

    return(
        <div className="signin-section section">
            <form className="signin__form" >
                <div className="user-profile signin-user-profile">
                    <span className="user-img signin-user-img">
                        <TiUser/>
                    </span>
                    <span className="user-name signin-user-name">Username</span>
                </div>

                <input 
                    className="signin__input input"
                    type="text" 
                    value={formValue.name}
                    name="name" 
                    placeholder="Enter your name..."
                    onChange={handleChange}
                ></input>
                <input
                    className="signin__input input"
                    type="email" 
                    value={formValue.email}
                    name="email" 
                    placeholder="Enter your email..."
                    onChange={handleChange}
                ></input>
                <button type="button" className="signin__btn btn" onClick={handleSubmit}>Sign-In</button>
            </form>
            
        </div>
    )
};

const mapStateToProps = (state) => ({
    auth: state.auth
});
const mapDispatchToProps = dispatch => ({
    onAuth: () => dispatch(authActions.authOn())
})

export default connect(mapStateToProps, mapDispatchToProps)(Signin);