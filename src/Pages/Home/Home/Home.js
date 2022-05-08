import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ProductReport from '../../ProductReport/ProductReport';
import Loading from '../../Shared/Loading/Loading';
import SupplierReports from '../../SupplierReports/SupplierReports';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    const [loading] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }
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