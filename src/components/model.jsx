import React, { Component } from 'react';
import {ProductConsumer} from "../context";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './common/button';
class Model extends Component {
    state = {  }
    render() { 
        return ( <ProductConsumer>
            {(value)=>{
                const {modelOpened,modelClose}=value;
                const {img,title,price}=value.modelProduct;
                console.log(modelOpened);
                if(!modelOpened)
                    return null
                else{
                    return(
                    <ModelContainer>
                        <div className="container">
                            <div className="row">
                            <div id="model" className="col-8 col-md-6  p-5 col-lg-4 mx-auto text-center text-capitalize">
                                <h5>item added to the cart</h5>
                                <img src={img} alt="product" className="img-fluid"/>
                                <h5>{title}</h5>
                    <h5 className="text-muted">price : ${price}</h5>
                    <Link to="/">
                        <ButtonContainer onClick={()=>modelClose()}>
                            continue shoping
                        </ButtonContainer>
                    </Link>
                    <Link to="/carts">
                        <ButtonContainer cart onClick={()=>modelClose()}>
                            go to cart
                        </ButtonContainer>
                    </Link>
                            </div>

                            </div>
                        </div>
                    </ModelContainer>
                    )
                }

            }}


        </ProductConsumer> );
    }
}
 
const ModelContainer=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
left:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#model{
    background:var(--mainWhite);
}

`


export default Model;