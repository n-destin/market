import React from "react";
// import './product.css'
import conversation from '../../images/conversation.png'
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { getProduct } from "../../actions/productActions";
import { useDispatch } from "react-redux";
const Product  = (props) =>{


    let numofItems = 0;
    
    function wordtransform(description){
        let toReturn = '';
        description = description.split('').map(letter =>{if(toReturn.length != 12) {toReturn += letter}});
        description = description.map
    }

    console.log(props.content);
    
    const id = props.id;
    const navigate = useNavigate();
    const dispatch  = useDispatch();
    
    // const getProductHolder = getProduct(id)
    useEffect(()=>{
        dispatch(getProduct(id));
    }, [])

    return(
        <div>
            <div className="card" onClick={()=>{navigate(`products/${id}`)}} style ={{width : '14rem'}} >
               <img src={props.content.Image} alt="img-thumbnail" className="card-img-top" />
               <div className="card-body">
                    <h5 className="cart-title"> $ {props.content.Price.$numberDecimal}</h5>
                    <p className="card-text overflow-hidden">{props.content.Description}</p>
                    <button className="btn btn-primary">Add to Cart</button>
               </div>
            </div>
        </div>
    )
}

export default Product;