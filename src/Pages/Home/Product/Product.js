import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    // console.log(product.name)
    const navigate = useNavigate()
    const { name, image, description, price, quantity, supplierName, _id } = product
    const handleProductUpdate = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='product'>
            <img className='product-image' src={image} alt="" />
            <h3 className='product-title'>{name}</h3>
            <p>{description}</p>
            <p> Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplierName}</p>
            <button onClick={() => handleProductUpdate(_id)} className='update-btn'>Update</button>
        </div>
    );
};

export default Product;