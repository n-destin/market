import React from "react";

const Product  = (props) =>{
    return(
        <div>
            <img src={props.image} alt="product-image" />
            <p>{props.description}</p>
            <p>{props.price}</p>
            <p>{props.views}</p>
        </div>
    )
}

export default Product;