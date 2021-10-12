import auth from "../../auth";
import './login.css'
import { Link } from "react-router-dom";
export const Login = props => {
    return (
        <div>
            <div className='login'>
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Lama Social</h3>
                        <span className="loginDesc"> Connect with the friends and world around you on Lamasocial</span>
                    </div>
                    <div className="loginRight">
                        <form action="" className="loginBox">
                            <input placeholder="Email" required type='email' className="loginInput" />
                            <input placeholder="password" required minLength={6} className="loginInput" type='password' />
                            <button className="loginButton" onClick={() => {
                                auth.login(() => {
                                    props.history.push("/user");
                                });
                            }} >Login</button>

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
