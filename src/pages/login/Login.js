// import auth from "../../auth";
import './login.css'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useRef } from "react";

export const Login = props => {
    const email = useRef()
    const password = useRef()
    const history = useHistory()
    const { user, dispatch } = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
        history.push('/user')
    };
    console.log(user)

    return (
        <div>
            <div className='login'>
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Lama Social</h3>
                        <span className="loginDesc"> Connect with the friends and world around you on Lamasocial</span>
                    </div>
                    <div className="loginRight">
                        <form action="" className="loginBox" onSubmit={handleClick}>
                            <input placeholder="Email" required type='email' className="loginInput" ref={email} />
                            <input placeholder="password" required minLength={6} className="loginInput" type='password' ref={password} />
                            <button className="loginButton" type='submit'>Login</button>
                            {/* <button className="loginButton" onClick={() => {
                                auth.login(() => {
                                    props.history.push("/user");
                                });
                            }} >Login</button> */}


                            <span className="loginForget">Forgot Password?</span>
                            <button className="loginRegisterbutton">
                                <Link to="/register" style={{ textDecoration: 'none' }}>
                                    <span className="logo">Sign Up</span>
                                </Link>
                            </button>
                        </form>


                    </div>
                </div>

            </div>

        </div >
    );
};
