import { Link } from 'react-router-dom';
import Table from '../Table/Table';

const ManageInventory = () => {
    return (
        <div className='container'>
            <Table className='w-100'></Table>
            <Link to='/addProduct'><button>Add Products</button></Link>
        </div>
    );
};

export default ManageInventory;