import React, { useState } from "react";
import { createProduct } from "../../actions/productActions";
import { useNavigate } from "react-router";
const CreateProduct = ()=>{
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState('')
    const [productPrice, setProductPrice] = useState();


    function setName(event){
        setProductName(event.target.value)
    }

    function setImage(event){
        setProductImage(event.target.value);
    }

    function setDescription(event){
        setProductDescription(event.target.value)
    }

    function setPrice(event){
        setProductPrice(event.target.value)
    }

    const createProductHolder = createProduct({Name: productName, Image: productImage, Description: productDescription, Price: productPrice});

    const navigate = useNavigate();

    return(
        <div>
            <h3>Sell something</h3>
            <div className="labels">
                <label htmlFor="">
                    Product Name:
                    <input type="text" name="Firstname" id="" onChange={setName}/>
                </label>
                <label htmlFor="">
                    Link to the image:
                    <input type="text" name="" id="" onChange={setImage}/>
                </label>
                <label htmlFor="">
                    Description:
                    <input type="text" name="" id="" onChange={setDescription}/>
                </label>
                <label htmlFor="">
                    Price:
                    <input type="text" name="" id="" onChange={setPrice}/>
                </label>
            </div>
            <input type="button" name="" id="" value='Create' onClick={()=>{createProductHolder(navigate)}}/>
        </div>
    )
}

export default CreateProduct;