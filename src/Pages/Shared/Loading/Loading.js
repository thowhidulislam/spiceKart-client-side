import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='container d-flex align-items-center justify-content-center mt-5'>
            <Spinner animation="grow" variant="success" />
        </div>
    );
};

export default Loading;