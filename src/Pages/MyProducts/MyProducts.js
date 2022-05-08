import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProducts = () => {
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getMyProducts = async () => {
            const email = user.email

            const url = `http://localhost:5000/inventory/myItems?email=${email}`
            try {
                const { data } = await axios.get(url)
                console.log(data)
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
        const url = `http://localhost:5000/inventory/${id}`
        const response = await axios.delete(url)
        const remaining = myProducts.filter(myProduct => myProduct._id !== id)
        setMyProducts(remaining)
    }

    return (
        <div className='container'>
            <h1> My Products</h1>
            <div className='d-flex'>
                {myProducts.map(myProduct => {
                    return <div key={myProduct._id}>
                        <h2>{myProduct.name}</h2>
                        <p>Price: {myProduct.price}</p>
                        <p>Quantity: {myProduct.quantity}</p>
                        <p>Supplier name: {myProduct.supplierName}</p>
                        <button onClick={() => handleDeleteButton(myProduct._id)}>Delete</button>
                    </div>
                })}
            </div>
        </div>
    );
};

export default MyProducts;