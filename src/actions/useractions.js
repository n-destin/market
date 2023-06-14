import axios from "axios"
const ROOT = 'URL_HERE'

export const ActionsType = {
    DELETE_ACCOUNT : 'DELETE_ACCOUNT',
    AUTHENTICATE_USER : 'AUTHENTICATE_USER',
}

export function createAccount(userInfo){
    console.log('sending Info');
    return (dispatch, navigate)=>{
        try {
            axios.post(`${ROOT}/signup`, {userInfo}).then(response=>{
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
    return (dispatch)=>{
        try {
            axios.post(`${ROOT}/signin`, ({Email, Password})).then(response=>{
                if(response){
                    dispatch({
                        type: ActionsType.AUTHENTICATE_USER
                    })
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}