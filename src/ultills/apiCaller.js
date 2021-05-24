import axios from 'axios';

export default function callAPI(endpoint, method = 'GET',body){
    return axios({
        method : method,
        url : `https://localhost:4001/${endpoint}`,
        data : body
    }).catch(err =>{
       console.log(err);
    });
}