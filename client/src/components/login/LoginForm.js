import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import Avatar from './ProfilePic';
import Banking from './Banking';

const LoginForm = () => {
    const { login, isAuthenticated, token, loadUser } = useContext(
        GlobalContext
    );

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (token) {
            loadUser();
        }
        if (isAuthenticated) {
            window.location = '/';
        }
    }, [isAuthenticated]);

    const onSubmit = e => {
        e.preventDefault();
        login(user);
    };

    return (
        <div className='login-page-container'>
            <div className='img'>
                <Banking />
            </div>

            <div className='login-container'>
                <form onSubmit={onSubmit}>
                    <Avatar />
                    <h2>Login</h2>
                    <div className='input-div one'>
                        <div className='i'>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input
                                type='text'
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
                    <a href='#'>Forgot Password?</a>
                    <input type='submit' value='Login' className='btn' />
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
