import React from 'react';
import Column from './column';
const ColumnContaier = () => {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
            <Column product="products"/>
            <Column product="name of product"/>
            <Column product="price"/>
            <Column product="quantity"/>
            <Column product="remove"/>
            <Column product="total"/>
            </div>
        </div>
      );
}
 
export default ColumnContaier;