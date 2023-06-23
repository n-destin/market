import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProduct } from "../../actions/productActions";

const ProductPage = (props)=>{

    const {id} = useParams();
    console.log(id);
    const dispatch = useDispatch();

    useEffect(()=>{
       const getProductHolder = getProduct();
       getProductHolder(id, dispatch);
    }, [])

    const product = useSelector((store)=>{return store.products.single})
    

    return(
        <div>
            <div className="element">
                {(product)?<h3>{product.Name}</h3> : 'No Product Clicked'}
            </div>
        </div>
    )
}

export default ProductPage;