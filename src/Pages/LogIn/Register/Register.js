import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import './Register.css'

const Register = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    let errorElement

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (error) {
        errorElement = <div>
            <p>{error.message}</p>
        </div>
    }

    if (user) {
        navigate('/home')
    }
    const handleRegister = async event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        await createUserWithEmailAndPassword(email, password)
        toast('Verification mail is sent to your email')

    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h3>Create an account</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms" className='ps-2'>Accept SpicyKart Terms and Conditions.</label>
                <Button variant="primary" type="submit" className='create-btn' disabled={!agree}>
                    Create an account
                </Button>
            </Form>
            <p>Already have an account?<Link to='/login'><button className='btn btn-link login-btn'>Login</button></Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Register