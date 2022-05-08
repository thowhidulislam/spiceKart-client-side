import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const SupplierReports = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {

            const url = `https://polar-castle-01342.herokuapp.com/inventory/`
            const { data } = await axios.get(url)
            setProducts(data)
        }
        getProducts()
    }, [])
    return (
        <div className='container my-5'>
            <div className="tiny-chart" >
                <h1 className='text-center mb-5'>Supplier Reports</h1>
                <LineChart width={450} height={400} data={products} className="w-50 mx-auto  table-responsive">
                    <Line type="monotone" dataKey="quantity" stroke="#8884d8" strokeWidth={2} />
                    <XAxis dataKey="supplierName" />
                    <YAxis />
                    <Tooltip />
                    <Legend></Legend>
                </LineChart>
            </div>
        </div>
    );
};

export default SupplierReports;