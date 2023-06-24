import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProduct } from "../../actions/productActions";
import './page.css'

const ProductPage = (props)=>{


    function addtoCart(userId){
        
    }

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
            <h1 className="heading">{product.Name}</h1>
            <div className="element">
                <div className="with-actions">
                    <div>
                        <img src={product.Image} alt="" />
                    </div>
                    <div className="actions">
                        <p>{product.Description}</p>
                        <p>Price : {product.Price}</p>
                        <div className="some-buttons">
                            <button className="buynow">Add to Cart</button>
                            <button className="add-to-cart">Make an Offer</button>
                        </div>
                        <button className="buy Now">Buy Now</button>
                    </div>
                </div>
                <div className="related-products">
                    <p>This is the products holder</p>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;