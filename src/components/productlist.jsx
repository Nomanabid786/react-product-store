import React, { Component } from 'react';
import Products from '../components/products';
import Title from './common/title';
import {ProductConsumer} from '../context';
class ProductList extends Component {
    state = { 
        
     }
    render() { 
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title name='our' title='Products'/>
                        <div className="row">
                            <ProductConsumer>
                                {(value)=>{
                                return value.products.map(product=>{
                                    return <Products key={product.id} product={product}/>
                                })
                                }}
                            </ProductConsumer>
                            

                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
 
export default ProductList;