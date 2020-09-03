import cookie from "js-cookie";

const adminToken = "admin_toKen"
export function getToken(){
    return cookie.get('adminToken')
}
export function getUsername(){
    return cookie.get('username')
}
export function setToKen(toKen){
    cookie.set('adminToken',toKen)
}

export function setUsername(value){
    cookie.set('username',value)
}
export function removeToken(){
    
    return cookie.remove("adminToken")
}
export function removeName(){
    
    return cookie.remove("username")
}