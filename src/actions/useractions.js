import axios from "axios"
const ROOT_URL = 'http://localhost:9090'

export const ActionsType = {
    DELETE_ACCOUNT : 'DELETE_ACCOUNT',
    AUTHENTICATE_USER : 'AUTHENTICATE_USER',
    DEAUTHENTICATE_USER : 'DEAUTHENTICATE_USER',
    AUTHENTICATION_ERROR : 'AUTHENTICATION_ERROR'
}

export function createAccount(userInfo){
    console.log('sending Info');
    return (dispatch, navigate)=>{
        console.log('entering in the returned function');
        try {
            axios.post(`${ROOT_URL}/signup`, {userInfo}).then((response)=>{
                console.log('got the response');
                if(response){
                    dispatch({
                        type: ActionsType.AUTHENTICATE_USER
                    })
                    navigate('/')
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export function SingIn({Email, Password}){
    return (dispatch, navigate)=>{
        try {
            axios.post(`${ROOT_URL}/signin`, {Email, Password}).then(response=>{
                if(response){
                    dispatch({
                        type: ActionsType.AUTHENTICATE_USER
                    })
                    navigate('/')
                    console.log('navigated to home');
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}