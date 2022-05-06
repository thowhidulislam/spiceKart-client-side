import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h3>Create an account</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create an account
                </Button>
            </Form>
            <p>Already have an account?<Link to='/login'><button className='btn btn-link login-btn'>Login</button></Link></p>
        </div>
    );
};

export default Register; <Form>
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