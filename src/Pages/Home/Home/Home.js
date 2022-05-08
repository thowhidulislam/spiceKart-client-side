import React from 'react';
import ProductReport from '../../ProductReport/ProductReport';
import SupplierReports from '../../SupplierReports/SupplierReports';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ProductReport></ProductReport>
            <SupplierReports></SupplierReports>
        </div>
    );
};

export default Home;