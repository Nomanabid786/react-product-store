import React from 'react';
import NavBar from './components/navbar';
import NotFound from './components/notFound';
import ProductList from './components/productlist';
import Carts from './components/cart/carts';
import Details from './components/details';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import Model from './components/model';




function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/carts" component={Carts}></Route>
        <Route  component={NotFound}></Route>

      </Switch>
     <Model/>
     
    </React.Fragment>
  )
}


export default App;
