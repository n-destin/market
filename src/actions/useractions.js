import axios from "axios"
export const ROOT_URL = 'http://localhost:9090/'

export const ActionsType = {
    DELETE_ACCOUNT : 'DELETE_ACCOUNT',
    AUTHENTICATE_USER : 'AUTHENTICATE_USER',
    DEAUTHENTICATE_USER : 'DEAUTHENTICATE_USER',
    AUTHENTICATION_ERROR : 'AUTHENTICATION_ERROR',
    GET_CONVERSATIONS : 'GET_CHAT_PERSONS',
    GET_MESSAGES : 'GET_MESSAGES'
}

export function createAccount(userInfo){
    return (dispatch, navigate)=>{
        try {
            axios.post(`${ROOT_URL}signup`, {userInfo}).then((response)=>{
                if(response){
                    console.log(response.data);
                    console.log(response.data.UserToken);
                    dispatch({
                        type: ActionsType.AUTHENTICATE_USER,
                        payload : response.data.userInfo
                    })
                    navigate('/');
                    localStorage.setItem('userToken', response.data.UserToken);
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export function SignIn(Email, Password){
    return (dispatch, navigate)=>{
        try {
            axios.post(`${ROOT_URL}signin`, {Email, Password}).then(response=>{
                if(response){
                    dispatch({
                        type: ActionsType.AUTHENTICATE_USER
                    })
                    localStorage.setItem('userToken', response.userToken.userToken)
                    navigate('/')
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}


export async function getPersonalInformation(){
    const userToken = localStorage.getItem('UserToken');
    try {
        axios.get('/getPersonalInformaion', {headers : {'authorization' : userToken}}).then(response=>{
            if(response){
                return response.data.userInformation;
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}