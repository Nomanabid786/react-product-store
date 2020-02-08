import React, { Component } from 'react';
import {storeProducts,detailProduct,productRender} from './data';
import CartTotals from './components/cart/cartTotal';
//Must place it at the top

const ProductContext=React.createContext();

class ProductProvider extends Component {
    state={
        products:[],
        laptopProducts:[],
        bikeProducts:[],
        details:detailProduct,
        cart:[],
        idOfPage:0,
        modelOpened:false,
        modelProduct:detailProduct,
        cartSubTotal:0,
        cartTotal:0,
        cartTax:0

    }
    componentDidMount(){
       let tempProducts= this.setProduct();
        this.handlePage(tempProducts);
     
    }
    handlePage=(tempProducts)=>{
        const {idOfPage}=this.state;
        if(idOfPage===0){
        tempProducts=tempProducts.filter(p=>p.type==='mobile');
        }else if(idOfPage===1){
         tempProducts=tempProducts.filter(p=>p.type==='laptop');
        }else if(idOfPage===2){
         tempProducts=tempProducts.filter(p=>p.type==='bike');
        }
         this.setState(()=>{return {products:tempProducts}});
    }

    setProduct=()=>{
        let tempProducts=[];
            storeProducts.forEach(product=>{
                const singleItem={...product};
                tempProducts=[...tempProducts,singleItem]
            })
            return tempProducts;
                 
    }
    getItem=(id)=>{
        const product=this.state.products.find(item=>item.id===id);
        return product;
    }
    
    handleDetails=id=>{
        const product=this.getItem(id);
        this.setState({details:product});
        
    }
    
    handleAddToCart=id=>{
        let tempProduct=[...this.state.products];
        const index=tempProduct.indexOf(this.state.products.find(p=>p.id===id));
        const product=tempProduct[index];
        product.inCart=true;
        product.count=1;
        product.total=product.price;
        this.setState(()=>{return {products:tempProduct,
            cart:[...this.state.cart,product]}},
            ()=>{this.handleAddTotal()})

    }
    setIdOfPage=id=>{
        this.setState({idOfPage:id});

        let tempProducts= this.setProduct();
        if(id===0){
        tempProducts=tempProducts.filter(p=>p.type==='mobile');
        }else if(id===1){
         tempProducts=tempProducts.filter(p=>p.type==='laptop');
        }else if(id===2){
         tempProducts=tempProducts.filter(p=>p.type==='bike');
        }
         this.setState(()=>{return {products:tempProducts}});
    }

    modelOpen=id=>{
        const product=this.state.products.find(item=>item.id===id);
        this.setState(()=>{return {modelProduct:product,modelOpened:true}})
    }
    modelClose=()=>{
        this.setState(()=>{return {modelOpened:false}});
    }
    handleIncrement=(id)=>{
        let tempCart=[...this.state.cart];
        let item=tempCart.find(product=>product.id===id);
        const index=tempCart.indexOf(item);
        const product=tempCart[index];
        product.count+=1;
        product.total=product.count*product.count;
        this.setState(()=>{return {cart:[...tempCart]}},()=>{this.handleAddTotal()})

    }
    handleDecrement=(id)=>{
        let tempCart=[...this.state.cart];
        let item=tempCart.find(product=>product.id===id);
        const index=tempCart.indexOf(item);
        const product=tempCart[index];
        product.count-=1;
        if(product.count===0){
            this.handleRemove(id);
        }else{
            product.total=product.count*product.count;
            this.setState(()=>{return {cart:[...tempCart]}},()=>{this.handleAddTotal()})
        }
        
        

        
    }
    handleRemove=(id)=>{
        let tempCart=[...this.state.cart];
        let tempProducts=[...this.state.products];
        tempCart=tempCart.filter(item=>item.id!==id);
        const index=tempProducts.indexOf(this.getItem(id));
        let removedProduct=tempProducts[index];
        removedProduct.inCart=false;
        removedProduct.count=0;
        removedProduct.total=0
        this.setState({cart:[...tempCart],products:[...tempProducts]},()=>{
          this.handleAddTotal(); 
        })
    }
    handleClear=()=>{
       this.setState({cart:[]},()=>{
           let tempProducts=this.setProduct();
           this.handlePage(tempProducts);
           this.handleAddTotal();
       })
    }
    handleAddTotal=()=>{
        let subtotal=0;
        this.state.cart.map(item=>{subtotal+=item.total});
        const tempTax=subtotal*0.1;
        const tax=parseFloat(tempTax.toFixed(2));
        const total=subtotal+tax;
        this.setState(()=>{return {cartTotal:total,
                                    cartTax:tax,
                                    cartSubTotal:subtotal}});
    }

    render() { 
        const  handleDetails=this.handleDetails;
        const handleAddToCart=this.handleAddToCart;
        const setIdOfPage=this.setIdOfPage;
       
       
        return ( 
            <ProductContext.Provider value={{...this.state,
              handleDetails ,
                handleAddToCart,
                setIdOfPage,
                 modelOpen:this.modelOpen,
                 modelClose:this.modelClose,
                handleIncrement:this.handleIncrement,
                handleDecrement:this.handleDecrement,
                handleClear:this.handleClear,
                handleRemove:this.handleRemove
            }}>
                    {this.props.children}
            </ProductContext.Provider>
         );
    }
}
 const ProductConsumer=ProductContext.Consumer; 
export {ProductProvider,ProductConsumer};