import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import Avatar from './ProfilePic';
import Banking from './Banking';

const LoginForm = () => {
    return (
        <div className='login-page-container'>
            <div className='img'>
                <Banking />
            </div>

            <div className='login-container'>
                <form>
                    <Avatar />
                    <h2>Welcome</h2>
                    <div
                        className='input-div one'
                        onClick={e =>
                            e.target.parentNode.parentNode.classList.add(
                                'focus'
                            )
                        }
                    >
                        <div className='i'>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div>
                            <h5>Username</h5>
                            <input
                                type='text'
                                className='input'
                                onBlur={e =>
                                    e.target.parentNode.parentNode.classList.remove(
                                        'focus'
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div
                        className='input-div two'
                        onClick={e =>
                            e.target.parentNode.parentNode.classList.add(
                                'focus'
                            )
                        }
                    >
                        <div className='i'>
                            <FontAwesomeIcon icon={faLock} />
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input
                                type='password'
                                className='input'
                                onBlur={e =>
                                    e.target.parentNode.parentNode.classList.remove(
                                        'focus'
                                    )
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
