import axios from 'axios'

const editUserService = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/editUser`,
    withCredentials: true
})

function editUser(username, password, country){
    return editUserService.put('/', {username, password, country} )
    .then(response => response.data)
}

function deleteUser(){
    return editUserService.delete('/')
    .then(res => res.data)
    .catch(err=>console.log(err))
}


export { editUser, deleteUser}