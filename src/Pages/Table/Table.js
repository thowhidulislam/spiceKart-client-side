import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Table = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/inventory")
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
                    {data.map(item => (
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.supplierName}</td>
                            <td><button onClick={() => handleDeleteButton(item._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default Table;