import React, { Component } from 'react';
import ColumnContainer from './columnContainer'
import Title from '../common/title';
import EmptyCart from './emptyCart';
import {ProductConsumer} from "../../context";
import CartList from './cartList';
import CartTotals from './cartTotal';
class Carts extends Component {
    state = {  }
    render() { 
        return ( 

            <section>
                <ProductConsumer>
                {value=>{
                        const {cart}=value;
                        if(cart.length>0){
                            return  <React.Fragment>
                            <Title name="Your" title="Cart"/>
                                    <ColumnContainer/>
                                    <CartList value={value}/>
                                    <CartTotals value={value} history={this.props.history}/>
                                    </React.Fragment>
                        }else{
                            return  <EmptyCart/>
                        }



                }}


                </ProductConsumer>
            </section>
         );
    }
}
 
export default Carts;