import axios from "axios"
import { ROOT_URL } from "../actions/useractions"
const getSignedUrl = (file)=>{
    console.log(file);
    const fileName = encodeURIComponent(file.name);
    console.log(fileName + '  '   + file.type);
    return axios.get(`${ROOT_URL}sign-s3?file_name=${fileName}&file_type=${file.type}`);
}

const uploadToAws = (signedUrl, file, url)=>{
    return new Promise((resolve, reject)=>{ // don't know what is wrong here
        axios.put(signedUrl, file, { headers : {'Content-Type' : file.type}}).then(response=>{
            if(response){
                resolve(url);
            }
        }).catch(error=>{
            reject(error);
        })
    })
}


export async function uploadToAmazon(file){
    const signedUrl = await getSignedUrl(file);
    let response;
    try {
        response = uploadToAws(signedUrl.data.Data, file, signedUrl.data.url);
    } catch (error) {
        console.log(error.message);
    }
    return response;
}