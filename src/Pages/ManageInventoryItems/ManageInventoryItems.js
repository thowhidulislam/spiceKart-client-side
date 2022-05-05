import React from 'react';

const ManageInventoryItems = ({ product }) => {
    let { name, image, description, price, quantity, supplierName } = product
    return (
        <div>
            <div className='container product-detail'>
                <img src={image} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <p> Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Supplier: {supplierName}</p>
                {/* <button onClick={() => handleQuantity(id)}>Delivered</button> */}
            </div>
        </div>
    );
};

export default ManageInventoryItems;