import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { toast, useToast } from 'react-toastify';
import useProductDetail from '../../hooks/useProductDetail';
import './ProductDetail.css'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useProductDetail(id)

    let { name, image, description, price, quantity, supplierName } = product
    const url = `http://localhost:5000/inventory/${id}`

    const handleQuantity = (id) => {
        if (quantity > 0) {
            quantity = parseInt(quantity - 1)
            console.log(quantity)
            const updatedProduct = { ...product, quantity }
            console.log(updatedProduct)
            setProduct(updatedProduct)

            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(updatedProduct)

            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data)
                    toast('Quantity is decreased.')
                })
        }
        else {
            toast("You don't have enough to remove")
        }

    }

    const handleRestock = async (event) => {
        event.preventDefault()
        let newQuantity = parseInt(event.target.quantity.value)
        if (isNaN(newQuantity) || newQuantity < 0) {
            toast('Please give valid number')
            event.target.reset()
            return false
        }
        else {
            quantity = quantity + newQuantity
            const updatedProduct = { ...product, quantity }
            setProduct(updatedProduct)

            await axios.put(url, updatedProduct)
                .then(response => {
                    const { data } = response
                    toast('Product is restocked.')
                    event.target.reset()
                })
        }
    }
    return (
        <div>
            <div className='container product-detail'>
                <img src={image} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <p> Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Supplier: {supplierName}</p>
                <button onClick={() => handleQuantity(id)}>Delivered</button>
                <div>
                    <form onSubmit={handleRestock}>
                        <input type="number" name="quantity" id="" />
                        <input type="submit" value="Restock" />
                    </form>
                </div>
                <Link to='/manageInventory'><button className='btn btn-link text-decoration-none'>Manage Inventories</button></Link>
            </div>
        </div>
    );
};

export default ProductDetail;