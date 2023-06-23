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

<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="product" onClick={()=>{navigate(`products/${id}`)}}  >
                    <img src={props.content.Image} alt="product-image" />
                    <p>{props.content.Description}</p>
                    <p>{props.content.Price}</p>
                    <p>{props.content.Views}</p>
                    {/* <button><img src={conversation} alt="" height='30px'/></button> */}
                </div>
            </div>
        </div>
    )
}

export default Product;