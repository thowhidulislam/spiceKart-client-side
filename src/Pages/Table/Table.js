import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Table = () => {
    const [data, setData] = useState([])
    const [user] = useAuthState(auth)
    const email = user.email

    useEffect(() => {
        fetch(`http://localhost:5000/inventory`)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])


    const handleDeleteButton = async id => {
        const url = `http://localhost:5000/inventory/${id}`
        const response = await axios.delete(url)
        const remaining = data.filter(item => item._id !== id)
        setData(remaining)
    }

    return (
        <div className='mt-5'>
            <h4>Inventory Products</h4>
            <table border={1} cellPadding={5} className='w-100'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier Name</th>
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
                            <td><button onClick={() => handleDeleteButton(product._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default Table;