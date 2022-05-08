import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Table.css'


const Table = () => {
    const [data, setData] = useState([])
    const [user] = useAuthState(auth)
    const email = user.email

    useEffect(() => {
        fetch(`https://polar-castle-01342.herokuapp.com/inventory`)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])


    const handleDeleteButton = async id => {
        const proceed = window.confirm('Are you sure you want to delete this product?')
        if (proceed) {
            const url = `https://polar-castle-01342.herokuapp.com/inventory/${id}`
            const response = await axios.delete(url)
            const remaining = data.filter(item => item._id !== id)
            setData(remaining)
        }
    }

    return (
        <div className='mt-5 table-responsive'>
            <h1 className='text-center mb-3'>Inventory Products</h1>
            <table border={1} cellPadding={5} className='w-100'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier Name</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(product => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.supplierName}</td>
                            <td><button onClick={() => handleDeleteButton(product._id)} className='delete-button'>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default Table;