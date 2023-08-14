import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getProduct } from "../../actions/productActions";
import './page.css'
import { getRelated } from "../../actions/productActions";
import Product from "./product";
import { cartAction } from "../../actions/productActions";
import Navigation from "../navigation/navigation";
import { createConversation } from "../../actions/useractions";

const ProductPage = (props)=>{

    const navigate = useNavigate();
    let relatedContent;
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
       const getProductHolder = getProduct();
       getProductHolder(id, dispatch);
    }, [])


    const product = useSelector((store)=>{return store.products.single})
    const category = product.Category;

    useEffect(()=>{
        const getRelatedHolder = getRelated(category);
        getRelatedHolder(dispatch);
    }, [product])

    const relatedProdudcts = useSelector(store=>{return store.all});

    if(relatedProdudcts){
        relatedContent = relatedProdudcts.map(product =>{
            return <Product /> // pass the information here
        })
    }
    const userToken = localStorage.getItem('userToken')
    console.log(userToken);

    const addingToCart = cartAction(id);
    const conversationCreator = createConversation(id)

    const KeepShoppingHandler = (products)=>{
        return(
            <div className="keepShoppingHeader">
                <div className="noHr">
                    <h5 className="shoppingheadtag">Keep shopping for {product.Name}</h5>
                    {/* {(products)? products.map(product=>{
                        return(
                            <div className="shoppingProduct">
                                <img src={product.image} alt="product" />
                            </div>
                        )
                    }): ''}; */}
                    <hr />
                </div>
            </div>
        )
    }

    return(
        <div>
            <Navigation />
            <KeepShoppingHandler/>
            <div className="element">
                <div className="with-actions">
                    <div>
                        <img src={product.Image} alt="" />
                    </div>
                    <div className="actions">
                        <p>{product.Description}</p>
                        <div className="some-buttons">
                            <button className="buynow" onClick={()=>{addingToCart(dispatch)}}>Add to Cart</button>
                            <button className="chat-with-a-seller" onClick={()=>{conversationCreator(navigate)}}>Chat with the seller</button>
                        </div>
                        <button className="buy Now"onClick={()=>{
                            navigate('/checkout'); 
                        }}>Buy Now</button>
                    </div>
                </div>
                <div className="related-products">
                    {(relatedContent)? relatedContent : 'No API call yet'}
                </div>
            </div>
        </div>
    )
}

export default ProductPage;