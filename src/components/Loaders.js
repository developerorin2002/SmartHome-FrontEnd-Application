import { getStoredCart } from "../utils/fakeDB";

export const loadAllData = async() =>{
    const fetchData = await fetch('products.json');
    const products = await fetchData.json();
    const getLocal = getStoredCart();
    const newProduct = [];
    for(const id in getLocal){
        const productFound = products.find(product=>product.id === id);
        if(productFound){
            const quantity = getLocal[id];
            productFound.quantity = quantity;
            newProduct.push(productFound);

        }
    }
    return {products , newProduct}
}