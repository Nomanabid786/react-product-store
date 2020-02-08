import React from 'react';
import { Link } from 'react-router-dom';
const CartTotals = ({value}) => {
    const { cartSubTotal,cartTotal,cartTax,handleClear}=value
    return (  
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                    <button className="btn btn-outline-danger text-uppercase mb-3 mx-5" type="button"
                    onClick={()=>handleClear()} >
                        clear cart
                    </button>
                    </Link>
                    <h5>
                        <span className="text-title">Subtotal :</span>
                            <strong>$ {cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title"> Tax :</span>
                            <strong>$ {cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">Total :</span>
                            <strong>$ {cartTotal}</strong>
                    </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default CartTotals;