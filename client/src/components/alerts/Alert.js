import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Alert = () => {
    const { alerts } = useContext(GlobalContext);
    return (
        alerts.length > 0 &&
        alerts.map(alert => (
            <div key={alert.id} className='alert'>
                {alert.msg}
            </div>
        ))
    );
};

export default Alert;
