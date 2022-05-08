import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './LogIn.css'
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import SocialLogIn from './SocialLogIn/SocialLogIn';

const LogIn = () => {
    const refEmail = useRef('')
    const refPassword = useRef('')
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const location = useLocation()
    const navigate = useNavigate()
    let errorElement;

    let from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (error) {
        errorElement = <div>
            <p className='text-danger'>{error.message}</p>
        </div>
    }

    if (user) {
    }

    const handleLogIn = async event => {
        event.preventDefault()
        const email = refEmail.current.value;
        const password = refPassword.current.value;
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('https://polar-castle-01342.herokuapp.com/login', { email })
        console.log(data)
        localStorage.setItem('accessToken', data.accessToken)
        console.log(data.accessToken)
        navigate(from, { replace: true });
    }

    const resetPassword = () => {
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
            <SocialLogIn></SocialLogIn>
        </div >
    );
};

export default LogIn;