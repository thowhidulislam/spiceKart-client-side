import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductDetail from '../../hooks/useProductDetail';
import './ProductDetail.css'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useProductDetail(id)

    let { name, image, description, price, quantity, supplierName } = product

    const handleQuantity = (id) => {
        quantity = parseInt(quantity - 1)
        const updatedProduct = { ...product, quantity }
        console.log(updatedProduct)
        setProduct(updatedProduct)

        // const url =
        fetch(`http://localhost:5000/inventory/${id}`, {
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
    return (
        <div className='container product-detail'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p> Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplierName}</p>
            <button onClick={() => handleQuantity(id)}>Delivered</button>
        </div>
    );
};

export default ProductDetail;