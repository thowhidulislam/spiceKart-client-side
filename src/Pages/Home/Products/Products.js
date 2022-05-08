import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [user] = useAuthState(auth)
    const email = user?.email
    const axios = require('axios');
    useEffect(() => {
        async function postProduct() {
            const url = `https://polar-castle-01342.herokuapp.com/inventory/`
            try {
                const response = await axios.get(url)
                setProducts(response.data.slice(-6))
            }
            catch {

            }
        }
        postProduct()
    }, [Products])

    return (
        <div className='products container'>
            <h1 className='text-center'>Products</h1>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='text-center'>
                <Link to='/manageInventory'><button className='btn btn-link manage-inventories-btn-1'>Manage Inventories</button></Link>
            </div>
        </div>
    );
};

export default Products;