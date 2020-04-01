import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../../context/GlobalState';

const Header = () => {
    const { logout } = useContext(GlobalContext);
    return (
        <>
            <h2>
                <span className='highlight'>E</span>xp
                <span className='highlight'>e</span>ns
                <span className='highlight'>e</span> Tr
                <span className='highlight'>a</span>ck
                <span className='highlight'>e</span>r
            </h2>
            <button id='logout' onClick={logout}>
                <span className='logout-text'>Logout</span>
                <FontAwesomeIcon icon={faSignOutAlt} className='logout-icon' />
            </button>
        </>
    );
};

export default Header;
