import React from 'react';
import './NotFound.css'
import notFound from '../../../images/404NotFound.png'

const NotFound = () => {
    return (
        <div className='container'>
            <img src={notFound} alt="" className='w-100' />
        </div>
    );
};

export default NotFound;