import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='contacts-container'>
                <div className='call-section'>
                    <h3>TALK TO US</h3>
                    <h6>Toll Free: 99 6346 543</h6>
                    <h6>Fax: 7776 4419 390</h6>
                </div>
                <div className='mail-section'>
                    <h3>MAIL US</h3>
                    <h6>support@spiceKart.com</h6>
                    <h6>info@spiceKart.com</h6>
                </div>
                <div className='address-section'>
                    <h3>OUR LOCATION</h3>
                    <h6 className=''>
                        #44,Block-2A, Majar road,<br />
                        Dhaka-1207.
                    </h6>
                </div>
            </div>
            <div className='text-white pb-2 text-center'>
                &copy;
                {(new Date().getFullYear())}
                <span className='ms-1'>spiceKart. All rights reserved. Design by Thowhidul Islam</span>
            </div>
        </div>
    );
};

export default Footer;