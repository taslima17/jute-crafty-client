
import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ProductsDetails from './Pages/Home/Products/ProductsDetails/ProductsDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import OurProducts from './Pages/OurProducts/OurProducts';
import DashBoard from './Pages/DeshBoard/DashBoard';
import NotFound from './Pages/NotFound/NotFound';
import YourOrders from './Pages/DeshBoard/YourOrders/YourOrders';
import AddReview from './Pages/DeshBoard/AddReview/AddReview';
import MakeAdmin from './Pages/DeshBoard/MakeAdmin/MakeAdmin';
import AddProduct from './Pages/DeshBoard/AddProduct/AddProduct';
import ManageProducts from './Pages/DeshBoard/ManageProducts/ManageProducts';
import ManageOrders from './Pages/DeshBoard/ManageOrders/ManageOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/ourproducts" element={<OurProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products/:id" element={<PrivateRoute><ProductsDetails /></PrivateRoute>} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>} >

              <Route index element={<YourOrders />} />

              <Route path="myorders" element={<YourOrders />} />
              <Route path="addreview" element={<AddReview />} />
              {/* <Route path={`${path}/payment/:id`} element={<Payment />} /> */}

              <Route path="addAdmin" element={<MakeAdmin />} />
              <Route path="addProduct" element={<AddProduct />} />
              <Route path="manageproducts" element={<ManageProducts />} />
              <Route path="manageorders" element={<ManageOrders />} />


            </Route>

            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
