import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
            <h2>
                <span className='highlight'>E</span>xp
                <span className='highlight'>e</span>ns
                <span className='highlight'>e</span> Tr
                <span className='highlight'>a</span>ck
                <span className='highlight'>e</span>r
            </h2>
            <button id='logout'>
                <span className='logout-text'>Logout</span>
                <FontAwesomeIcon icon={faSignOutAlt} className='logout-icon' />
            </button>
        </>
    );
};

export default Header;
