import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className='container w-50 mx-auto mt-5'>
            < h3 className='text-center'> Please login</h3 >
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to SpicyKart?<Link to='/register'><button className='btn btn-link register-btn'>Create an account</button></Link></p>
        </div >
    );
};

export default LogIn;