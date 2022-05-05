import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const axios = require('axios');
    useEffect(() => {
        async function postProduct() {
            const url = `http://localhost:5000/inventory`
            try {
                const response = await axios.get(url)
                setProducts(response.data.slice(-6))
            }
            catch {

            }
        }
        postProduct()
    }, [Products])

    const handleManageInventoryButton = () => {

        async function postProduct() {
            const url = `http://localhost:5000/inventory`
            try {
                const response = await axios.get(url)
                setProducts(response.data)
            }
            catch {

            }
        }
        postProduct()
    }

    return (
        <div className='products container'>
            <h3>Products</h3>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <Link to='/manageInventory'><button className='btn btn-link onClick={handleManageInventoryButton}'>Manage Inventories</button></Link>
        </div>
    );
};

export default Products;