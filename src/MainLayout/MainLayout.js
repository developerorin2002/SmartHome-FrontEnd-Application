import React, { createContext, useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, useLoaderData } from 'react-router-dom';
export const ProductContext = createContext([]);
export const CartContext = createContext([]);
const MainLayout = () => {
    const {products , newProduct} = useLoaderData();
    const [cart , setCart] = useState(newProduct);

    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart,setCart]}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </CartContext.Provider>
        </ProductContext.Provider>
    );
};

export default MainLayout;