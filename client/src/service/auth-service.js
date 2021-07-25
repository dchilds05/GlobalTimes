import axios from 'axios'

const authService = axios.create({
    baseURL: 'http://localhost:5000/api/auth',
    withCredentials: true
})

function signup(username, password, country){
    return authService.post('/signup', {username, password, country} )
    .then(response => response.data)
}

function login(username, password){
    return authService.post('/login', {username, password})
    .then(res => res.data)
    .catch(err=>console.log(err))
}

function logout(){
    return authService.get('/logout')
    .then(res=>res.data)
}


function isLoggedIn(){
    return authService.get('/isloggedin')
    .then(res=>res.data)
}
export { authService, signup, login, logout, isLoggedIn}