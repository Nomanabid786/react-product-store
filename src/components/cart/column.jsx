import React, { Component } from 'react';
class Column extends Component {
    state = {  }
    render() { 
        const {product}=this.props
        return ( 
            
            <div className="col-10 mx-auto col-lg-2">
<p className="text-uppercase" >{product}</p>
</div>
         );
    }
}
 
export default Column;