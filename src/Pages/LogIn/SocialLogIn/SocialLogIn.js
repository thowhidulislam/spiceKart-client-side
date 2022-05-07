import React from 'react';
import './SocialLogIn.css'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from "../../../images/google.png"
import facebook from "../../../images/facebook.png"

const SocialLogIn = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
    let errorElement

    if (errorGoogle || errorFacebook) {
        errorElement = <div>
            <p className='text-danger'>{errorGoogle?.message}{errorFacebook?.message}</p>
        </div>
    }
    return (
        <div>
            <div className='social-sites-lines'>
                <div className='left-line'></div>
                <p className='mt-3 mx-2'>OR</p>
                <div className='right-line'></div>
            </div>
            <div className='social-btn-container'>
                <button className='social-btn' onClick={() => signInWithGoogle()}><img className='google-logo' src={google} alt="" /></button>
                <button className='social-btn' onClick={() => signInWithFacebook()}><img className='facebook-logo' src={facebook} alt="" /></button>
            </div>
            {errorElement}
            <div>
            </div>
        </div>
    );
};

export default SocialLogIn;