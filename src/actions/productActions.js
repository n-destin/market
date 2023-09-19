import axios from "axios"
import { ActionsType, ROOT_URL } from "./useractions"
import {store} from '../index'

export const productActions = {
    GET_PRODUCTS : 'FETCH_PRODUCTS',
    GET_PRODUCT : 'FETCH_PRODUCT',
    GET_CART : 'GET_CART',
    DEFAULT_SELECTION : 'DEFAULT_SELECTION'
}


export function getProducts(){
    return(dispatch)=>{
        try {
            axios.get(`${ROOT_URL}products`).then(response =>{
                if(response){
                    dispatch({
                        type: productActions.GET_PRODUCTS,
                        payload : response.data
                    })
                }
            })
        } catch (error) {
            console.log(error.messsage);
        }
    }
}


export function createProduct(productFields){
    return (navigate)=>{
        try {
            axios.post(`${ROOT_URL}createProduct`, (productFields), {headers : {'authorization' : localStorage.getItem('userToken')}}).then(response=>{
                if(response){
                    navigate('/')
                }
            })
        } catch (error) {
            console.log(error.messsage);
        }
    }
}

export function getProduct(){
    return (productId, dispatch)=>{
        try {
            axios.get(`${ROOT_URL}getProduct/${productId}`).then(response=>{
                if(response){
                    dispatch({
                        type: productActions.GET_PRODUCT,
                        payload: response.data
                    })
                }
            })
        } catch (error) {
            console.log(error.messsage);
        }
    }
}

export function getCartElements(dispatch) {
    console.log('getting elements ');
    axios.get(`${ROOT_URL}getCartElements`, {headers :{'authorization' : localStorage.getItem('userToken')}}).then(response=>{
        dispatch({
            type: productActions.GET_CART, // get the products for the card
            payload: response.data
        })
    })
}

export function cartAction(productId){
    return(dispatch)=>{
        try {
            axios.post(`${ROOT_URL}addtocart?productId=${productId}`, {}, {headers : {'authorization' : localStorage.getItem('userToken')}}).then(response=>{
                if(response){
                    getCartElements(dispatch);
                }
            })
        } catch (error) {
            console.log(error.messsage);
        }
    }
}



export function getRelated(category){
    return (dispatch)=>{
        axios.get(`${ROOT_URL}related/${category}`).then(response=>{
            if(response){
                dispatch({
                    type: productActions.GET_PRODUCTS,
                    payload: response.data
                })
            }
        })
    }
}

export function defaultSelection (){
    return (conversationId)=>{
        console.log(conversationId);
        store.dispatch({
            type: productActions.DEFAULT_SELECTION,
            payload : conversationId
        })
    }
  }

export function deletecartelement(){
    return(dispatch, productId, navigate)=>{
        try {
            axios.get(`${ROOT_URL}deletecartelement?productId=${productId}`, {headers : {'authorization' : localStorage.getItem('userToken')}}).then(response=>{
                console.log(response);
                if(response){
                    getCartElements(dispatch);
                    navigate('/cart')
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }    
}