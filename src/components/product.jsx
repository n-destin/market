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
            <div className="product" onClick={()=>{navigate(`products/${id}`)}}>
                <img src={props.content.Image} alt="product-image" />
                <p>{props.content.Description}</p>
                <p>{props.content.Price}</p>
                <p>{props.content.Views}</p>
                {/* <button><img src={conversation} alt="" height='30px'/></button> */}
            </div>
        </div>
    )
}

export default Product;