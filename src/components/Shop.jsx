import React, { useContext } from 'react'
import { CartContext, ProductContext } from '../MainLayout/MainLayout'
import Product from '../components/Product'
import { addToDb } from '../utils/fakeDB'
import { toast } from 'react-toastify'
const Shop = () => {
  const products = useContext(ProductContext);
  
  const [cart , setCart] = useContext(CartContext)
  const handleAdd = (product) =>{
    let newCart = [];
    const existProduct = cart.find(pd => pd.id === product.id);
    if(!existProduct){
      product.quantity = 1; 
      newCart = [...cart , product]
    }else{
      product.quantity = product.quantity + 1;
      const rest = cart.filter(pd => pd.id !== product.id);
      newCart = [...rest , existProduct]
    };
    setCart(newCart);
    addToDb(product.id);
    toast.success('Successfully Added' , {autoClose:500})
  }


  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {
          products.map(product => <Product handleAdd={handleAdd} key={product.id} product={product}></Product>)
        }
      </div>
    </div>
  )
}

export default Shop
