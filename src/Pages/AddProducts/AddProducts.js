import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Slider from '../Slider/Slider';
import './AddProducts.css'

const AddProducts = () => {
    const [products, setProducts] = useState([])
    const handleAddProduct = event => {
        event.preventDefault()
        const product = {
            _id: products._id,
            name: event.target.name.value,
            image: event.target.image.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplierName: event.target.supplierName.value,
        }
        axios.post('http://localhost:5000/inventory', product)
            .then(function (response) {
                console.log(response)
                toast(product.name + ' ' + 'added successfully.')
            })
    }
    return (
        <div className='add-items-container'>
            <h2 className='text-center'>ADD PRODUCTS</h2>
            <form onSubmit={handleAddProduct} className='add-items-form'>
                <input type="text" name="name" id="" placeholder='Name of the product' />
                <input type="text" name="image" id="" placeholder='Product Image URL' />
                <input type="text" name="description" id="" placeholder='Description' />
                <input type="text" name="price" id="" placeholder='Price' />
                <input type="text" name="quantity" id="" placeholder='Quantity' />
                <input type="text" name="supplierName" id="" placeholder='Supplier Name' />
                <input type="submit" value="Add item" />
            </form>
        </div>

    );
};

export default AddProducts;