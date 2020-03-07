import axios from 'axios'

async function commonApiCall(method, url, data=null){
    let headers = null
    if(localStorage.getItem('token')){
        headers={
            "Content-type":"application/json",
            "Authorization":("Token " + localStorage.getItem('token'))
        }
    }else{
        headers={
            "Content-type":"application/json"
        }
    }
    const res = await axios({
        method: method,
        url : url,
        data: data,
        headers:headers
    })
    return res
}

export default commonApiCall