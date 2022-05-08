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
import RequireAuth from './Pages/LogIn/RequireAuth/RequireAuth';
import MyProducts from './Pages/MyProducts/MyProducts';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }></Route>
        <Route path='/addProduct' element={
          <RequireAuth>
            <AddProducts></AddProducts>
          </RequireAuth>
        }></Route>
        <Route path='/myProducts' element={
          <RequireAuth>
            <MyProducts></MyProducts>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </>
  );
}

export default App;
