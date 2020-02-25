export const USERBASEURL = "http://127.0.0.1:8000/accounts/"
export const USERTODOURL = "http://127.0.0.1:8000/todo/"

async function GETHEADERS(token=null) {
    let headers={}
    if(!token){
        headers = {
            'Content-Type': 'application/json',
        }}
    else{
        headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        }}
    return headers
}
export default GETHEADERS