import axios from "axios"


const ROOT_URL = 'URL_HERE'

export const ActionsType = {
    CREATE_ACCOUNT : 'CREATE_ACCOUNT',
    DELETE_ACCOUNT : 'DELETE_ACCOUNT',
    LOG_IN : 'LOG_IN',
}

export default function createAccount(){
    return (dispatch, navigate, userInfo)=>{
        try {
            axios.post('/singup', {userInfo}).then(response=>{
                if(response){
                    dispatch(ActionsType.CREATE_ACCOUNT)
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}