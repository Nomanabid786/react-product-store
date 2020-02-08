import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './common/button';
class Details extends Component {
    state = {  }
    render() { 
        return (
            <ProductConsumer>
                {value=>{
                    const {id,img,info,price,title,inCart,company}=value.details;
                    return(<div className="container py-5">
                        <div className="mx-auto text-center text-blue py-5 text-slanted col-10">
                            <h1>{title}</h1>
                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img className='img-fluid' src={img} alt="product"/>
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h1>model :{title}</h1>
                            <h4 className="text-title mb-2 mt-3 text-muted text-uppercase">
                                made by :<span>{company}</span>
                            </h4>
                            <h4 className="text-blue">
                                <strong >
                                price :<span>$</span>{price}
                                </strong>
                            </h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                some info about product :
                            </p>
                            <p className="text-muted lead">
                                {info}
                            </p>
                            <div>
                                <Link to='/'>
                                <ButtonContainer>
                                    Back to Products
                                </ButtonContainer>
                                </Link>
                                <ButtonContainer cart disabled={inCart?true:false} onClick={()=>{value.handleAddToCart(id);
                                value.modelOpen(id)}}>
                                    {inCart?"inCart":"add to cart"}
                                </ButtonContainer>
                            </div>
                            </div>
                        </div>
                    </div>)
                }}
            </ProductConsumer>
          );
    }
}
 
export default Details;