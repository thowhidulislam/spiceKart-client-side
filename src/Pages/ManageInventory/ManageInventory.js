import { Link } from 'react-router-dom';
import Table from '../Table/Table';
import './ManageInventory.css'

const ManageInventory = () => {
    return (
        <div className='container'>
            <Table className='w-100'></Table>
            <div className='text-center mb-5'>
                <Link to='/addProduct'><button className='add-product-btn'>Add Products</button></Link>
            </div>
        </div>
    );
};

export default ManageInventory;