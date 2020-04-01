import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Avatar from '../login/ProfilePic';
import SignUpSVG from './SignUpSVG';

import { GlobalContext } from '../../context/GlobalState';

const LoginForm = props => {
    const { registerUser, isAuthenticated, loadUser, token } = useContext(
        GlobalContext
    );

    const [user, setUser] = useState({
        email: '',
        password: '',
        password2: ''
    });

    useEffect(() => {
        if (token) {
            loadUser();
        }
        if (isAuthenticated) {
            window.location = '/';
        }
    }, [isAuthenticated, props.history]);

    const onSubmit = e => {
        e.preventDefault();

        if (user.password !== user.password2) {
            return alert('Passwords must be the same');
        }

        const newUser = {
            email: user.email,
            password: user.password
        };

        registerUser(newUser);
    };

    const haveAccount = () => {};

    return (
        <div className='login-page-container'>
            <div className='img'>
                <SignUpSVG />
            </div>

            <div className='login-container'>
                <form onSubmit={onSubmit}>
                    <Avatar />
                    <h2>Register</h2>
                    <div className='input-div one'>
                        <div className='i'>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input
                                type='email'
                                className='input'
                                onClick={e =>
                                    e.target.parentNode.parentNode.classList.add(
                                        'focus'
                                    )
                                }
                                onBlur={e =>
                                    e.target.parentNode.parentNode.classList.remove(
                                        'focus'
                                    )
                                }
                                value={user.email}
                                onChange={e =>
                                    setUser({ ...user, email: e.target.value })
                                }
                            />
                        </div>
                    </div>
                    <div className='input-div two'>
                        <div className='i'>
                            <FontAwesomeIcon icon={faLock} />
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input
                                type='password'
                                className='input'
                                onClick={e =>
                                    e.target.parentNode.parentNode.classList.add(
                                        'focus'
                                    )
                                }
                                onBlur={e =>
                                    e.target.parentNode.parentNode.classList.remove(
                                        'focus'
                                    )
                                }
                                value={user.password}
                                onChange={e =>
                                    setUser({
                                        ...user,
                                        password: e.target.value
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className='input-div two'>
                        <div className='i'>
                            <FontAwesomeIcon icon={faLock} />
                        </div>
                        <div>
                            <h5>Confirm Password</h5>
                            <input
                                type='password'
                                className='input'
                                onClick={e =>
                                    e.target.parentNode.parentNode.classList.add(
                                        'focus'
                                    )
                                }
                                onBlur={e =>
                                    e.target.parentNode.parentNode.classList.remove(
                                        'focus'
                                    )
                                }
                                value={user.password2}
                                onChange={e =>
                                    setUser({
                                        ...user,
                                        password2: e.target.value
                                    })
                                }
                            />
                        </div>
                    </div>
                    <Link to='/login'>Already have an account?</Link>
                    <input type='submit' value='Register' className='btn' />
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
