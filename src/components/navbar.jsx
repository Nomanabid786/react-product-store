import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import { ButtonContainer } from './common/button';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import { NavWrapper } from './common/nav';
import { productRender,setId } from './../data';
class NavBar extends Component {
    state = { id:'' }

    componentDidMount(){
        const id=productRender.id;
    
    }
    setIdOfPage=(id)=>{
        setId(id);
    }
   

    render() { 
        return ( 
        <NavWrapper className="navbar  navbar-expand-sm navbar-dark  px-sm-5 ">
            {/*
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk  */}
<Link to='/'>
<img src={logo} alt="store" className="navbar-brand"/>
</Link>
<ProductConsumer>
    {value=>(
<ul className="navbar-nav align-items-center">
    <li className="nav-item ml-5">
        <Link  to='/' onClick={()=>value.setIdOfPage(0)} className="nav-Link"style={{color:'White'}} >Mobile</Link>
    </li>
</ul>)}
</ProductConsumer>
<ProductConsumer>
    {value=>(
<ul className="navbar-nav align-items-center">
    <li className="nav-item ml-5">
        <Link  to='/' onClick={()=>value.setIdOfPage(1)} className="nav-Link"style={{color:'White'}} >Laptop</Link>
    </li>
</ul>
    )}
    </ProductConsumer>
    <ProductConsumer>{value=>(
<ul className="navbar-nav align-items-center">
    <li className="nav-item ml-5">
        <Link  to='/' onClick={()=>value.setIdOfPage(2)} className="nav-Link"style={{color:'White'}} >Bike</Link>
    </li>
</ul>
    )}
</ProductConsumer>
<Link to="/carts" className="ml-auto">
<ButtonContainer><span className="mr-2"><i class="fa fa-cart-plus" aria-hidden="true"> my cart</i></span></ButtonContainer>
</Link>
        </NavWrapper> );
    }
}

export default NavBar;