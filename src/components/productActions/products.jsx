import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
// import { getProducts } from "../../actions/productActions";
import Product from "../product";

function Products (){

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getProducts());
    }, [])

    const products = useSelector((store)=>{return store.products.all;})

    console.log((typeof(products)));

    return(
        <div>
            {(products)? products.map(product=>{ return <Product id = {product._id}content = {product} />}) : 'No products Yet'}
        </div>
    )
}

export default Products;