import auth from "../../auth";
import './register.css'
import { Link } from "react-router-dom";
export const Register = props => {
    return (
        <div className='login'>

            <div className="loginWrapper">

                <div className="loginLeft">
                    <h3 className="loginLogo">Lama Social</h3>
                    <span className="loginDesc"> Connect with the friends and world around you on Lamasocial</span>
                </div>

                <div className="loginRight">

                    <form className="loginBox">
                        <input placeholder="Username" required className="loginInput" />
                        <input placeholder="Email" required type="email" className="loginInput" />
                        <input placeholder="Password" required type="password" minLength='6' className="loginInput" />
                        <input placeholder="Password Again" required type="password" className="loginInput" />

                        <button className="loginButton" type='submit' onClick={() => {
                            auth.login(() => {
                                props.history.push("/user");
                            });
                        }}>Sign Up</button>
                    </form>
                    <button className="loginRegisterbutton" >
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <span className="logo"> Login to Account </span>

                        </Link>


                    </button>

                </div>
            </div>
        </div >

    )
}