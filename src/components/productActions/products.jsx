import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
// import { getProducts } from "../../actions/productActions";
import Product from "./product";
import '../index.css'
import Navigation from "../navigation/navigation";

function Products (){

    const dispatch = useDispatch();
    // const [userInformation, setUserInformation ] = useState();
    // change the displayed products accordingly
    useEffect(()=>{
        dispatch(getProducts());
    }, [])

    const products = useSelector((store)=>{return store.products.all;})
    const userInformation = useSelector((store)=>{return store.user.userInformation});

    return(
        <div>
            <Navigation firstName = {(userInformation)? userInformation.firstName : 'There is no one here'} />
            <div className="productContainer">
                {(products)? products.map(product=>{ return <Product id = {product._id}content = {product} />}) : 'No products Yet'}
            </div>
        </div>
    )
}

export default Products;