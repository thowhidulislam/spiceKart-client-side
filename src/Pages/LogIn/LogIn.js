import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './LogIn.css'
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRef } from 'react';

const LogIn = () => {
    const refEmail = useRef('')
    const refPassword = useRef('')
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        errorElement = <div>
            <p>{error.message}</p>
        </div>
    }

    const handleLogIn = async event => {
        console.log(event)
        event.preventDefault()
        const email = refEmail.current.value;
        const password = refPassword.current.value;
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('http://localhost:5000/login', { email })
        console.log(data)
    }

    const resetPassword = (event) => {
        const email = refEmail.current.value;

        if (email) {

            sendPasswordResetEmail(email)
            toast('Email sent')
        }

        else {
            toast('Please enter a valid email address')
        }

    }



    return (
        <div className='container w-50 mx-auto mt-5'>
            < h3 className='text-center'> Please login</h3 >
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" ref={refEmail} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" ref={refPassword} placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>Forgot Password?<button onClick={resetPassword} className='btn btn-link text-decoration-none'>Reset Password</button></p>
            <p>New to SpicyKart?<Link to='/register'><button className='btn btn-link register-btn'>Create an account</button></Link></p>
        </div >
    );
};

export default LogIn;