import React from "react";
import './product.css'
import conversation from '../images/conversation.png'
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { getProduct } from "../actions/productActions";
import { useDispatch } from "react-redux";
const Product  = (props) =>{

    
    const id = props.id;
    const navigate = useNavigate();
    const dispatch  = useDispatch();
    
    // const getProductHolder = getProduct(id)
    useEffect(()=>{
        dispatch(getProduct(id));
    }, [])

    return(
        <div>
            {console.log(props.content)}
            <div className="product" onClick={()=>{navigate(`products/${id}`)}}  >
                <img src={props.content.Image} alt="product-image" />
                <h2>{props.content.Name}</h2>
                <p>{props.content.Description}</p>
                <p><span className="price">Price:</span> $ {props.content.Price}</p>
                <p>{props.content.Views}</p>
                <button className="cartButton">Add to Cart</button>
                {/* <button><img src={conversation} alt="" height='30px'/></button> */}
            </div>
        </div>
    )
}

export default Product;