import React from 'react'
import Header from "./components/header"
import Home from "./containers/home"
import Register from "./containers/user/register"
import Login from './containers/user/login'
import Logout from './containers/user/logout'
import Profile from './containers/user/profile'
import Products from './containers/product'

import Admin from './containers/admin/admin'
import AddMassages from './containers/admin/massages/addMassages'
import EditMassages from './containers/admin/massages/editMassages'
import Basket from './containers/basket'
import ContactUs from './containers/contact'
import About from './containers/about'
import ProductDetail from './containers/productdetail'
import Booking from './containers/booking'
import Footer from './components/footer'

import "./font/WorkSans-Regular.ttf"



import {Routes, Route} from 'react-router-dom'
import RequireDataAuth from './helpers/require-data-auth'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<RequireDataAuth child={Home} auth={false}/>}/>
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/logout" element={<Logout />}/>
          <Route exact path="/contact" element={<ContactUs/>}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/profile" element={<RequireDataAuth child={Profile} auth={true}/>}/>
          <Route exact path="/product" element={<RequireDataAuth child={Products} auth={false}/>}/>
          <Route exact path="/product/:id" element={<RequireDataAuth child={ProductDetail} auth={false}/>}/>
          
          <Route exact path="/admin" element={<RequireDataAuth child={Admin} auth={true}/>}/>
          <Route exact path="/addMassages" element={<RequireDataAuth child={AddMassages} auth={true}/>}/>
          <Route exact path="/editMassages/:id" element={<RequireDataAuth child={EditMassages} auth={true}/>}/>
          <Route exact path="/basket" element={<RequireDataAuth child={Basket} auth={false}/>}/>
          <Route exact path="/product/booking" element={<RequireDataAuth child={Booking} auth={true} />}/>
          
        </Routes>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
