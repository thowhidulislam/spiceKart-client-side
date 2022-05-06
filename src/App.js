import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import AddProducts from './Pages/AddProducts/AddProducts';
import Products from './Pages/Home/Products/Products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/LogIn/Register/Register';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/inventory/:id' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/addProduct' element={<AddProducts></AddProducts>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </>
  );
}

export default App;
