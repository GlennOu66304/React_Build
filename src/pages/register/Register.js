// import auth from "../../auth";
import React, { useRef } from 'react'
import './register.css'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import http from '../../http-common'

export const Register = props => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory()

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("password don't match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                await http.post('users/register', user)
                history.push('/login')
            } catch (err) {
                console.log(err)
            }

        }

    }

    return (
        <div className='login'>

            <div className="loginWrapper">

                <div className="loginLeft">
                    <h3 className="loginLogo">Lama Social</h3>
                    <span className="loginDesc"> Connect with the friends and world around you on Lamasocial</span>
                </div>

                <div className="loginRight">

                    <form className="loginBox" onSubmit={handleClick} >
                        <input placeholder="Username" required className="loginInput" ref={username} />
                        <input placeholder="Email" required type="email" className="loginInput" ref={email} />
                        <input placeholder="Password" required type="password" minLength='6' className="loginInput" ref={password} />
                        <input placeholder="Password Again" required type="password" className="loginInput" ref={passwordAgain} />
                        <button className="loginButton" type='submit'>Sign Up</button>
                        {/* <button className="loginButton" type='submit' onClick={() => {
                            auth.login(() => {
                                props.history.push("/user");
                            });
                        }}>Sign Up</button> */}
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