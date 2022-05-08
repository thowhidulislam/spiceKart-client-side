import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import './MyProducts.css'

const MyProducts = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getMyProducts = async () => {
            const email = user.email

            const url = `https://polar-castle-01342.herokuapp.com/inventory/myItems?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url)
                setMyProducts(data)
            }
            catch (error) {
                console.log(error.message)
                if (error.response.status === 401 || 403) {
                    signOut(auth)
                    navigate('/login')
                }

            }
        }
        getMyProducts()
    }, [user])

    const handleDeleteButton = async id => {
        const proceed = window.confirm('Are your sure you want to delete this product?')
        if (proceed) {
            const url = `https://polar-castle-01342.herokuapp.com/inventory/${id}`
            const response = await axios.delete(url)
            const remaining = myProducts.filter(myProduct => myProduct._id !== id)
            setMyProducts(remaining)
        }
    }

    return (
        <div className='container mb-5'>
            <h1 className='my-products-title'> My Products</h1>
            <div className='my-product-container'>
                {myProducts.map(myProduct => {
                    return <div className='my-product' key={myProduct._id}>
                        <h2>{myProduct.name}</h2>
                        <p>Price: {myProduct.price}</p>
                        <p>Quantity: {myProduct.quantity}</p>
                        <p>Supplier name: {myProduct.supplierName}</p>
                        <button onClick={() => handleDeleteButton(myProduct._id)} className='delete-button'>Delete</button>
                    </div>
                })}
            </div>
        </div>
    );
};

export default MyProducts;