
import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ProductsDetails from './Pages/Home/Products/ProductsDetails/ProductsDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import OurProducts from './Pages/OurProducts/OurProducts';
import DashBoard from './Pages/DeshBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/ourproducts">
              <OurProducts></OurProducts>
            </Route>
            <PrivateRoute path="/products/:id">
              <ProductsDetails></ProductsDetails>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
