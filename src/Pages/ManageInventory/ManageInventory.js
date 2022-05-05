import React, { useEffect, useState } from 'react';
import Products from '../Home/Products/Products';
import ManageInventoryItems from '../ManageInventoryItems/ManageInventoryItems';

const ManageInventory = () => {
    const [products, setProducts] = useState([])
    const axios = require('axios');
    useEffect(() => {
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
    }, [Products])
    return (
        <div>
            {
                products.map(product => <ManageInventoryItems
                    key={product._id}
                    product={product}
                ></ManageInventoryItems>)
            }
        </div>
    );
};

export default ManageInventory;