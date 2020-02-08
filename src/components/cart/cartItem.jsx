import React, { Component } from 'react';
class CartItem extends Component {
    state = {  }
   
    render() { 
        const {item,value}=this.props;
        const {img,title,total,id,price,count}=item;
        const {handleIncrement,handleDecrement,handleRemove}=value;
        return ( <div className="row my-1 text-center text-capitalize">
            <div className="col-10 mx-auto col-lg-2">
            <img src={img} alt="products" style={{height:"5rem",width:'5rem'}} 
            className="img-fluid" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product :</span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">price :</span>
                {price} 
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                    <span className="btn btn-black mx-1"  onClick={()=>handleDecrement(id)}>
                    <i class="fa fa-minus" aria-hidden="true"></i>
                    </span>
    <span className="btn btn-black mx-1">{count}</span>
    <span className="btn btn-black mx-1" onClick={()=>handleIncrement(id)}>
    <i class="fa fa-plus" aria-hidden="true"></i>
    </span>
                    </div>
                </div>


            </div>
            <div className="col-10 mx-auto col-lg-2">
                 <div className="cart-icon" onClick={()=>handleRemove(id)}>
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </div>
            </div>
            
            <div className="col-10 mx-auto col-lg-2">
                <strong>total : {total}</strong>
            </div>
        </div> );
    }
}
 
export default CartItem;