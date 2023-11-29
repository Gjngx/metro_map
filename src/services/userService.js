import axios from 'axios'
const ADMIN_BASE_REST_API_URL = 'http://localhost:8080/api/v1/admins';
const ADMIN_SIGNUP_BASE_REST_API_URL ='http://localhost:8080/api/auth';
class UserService{

    getAllUser(){
        return axios.get(ADMIN_BASE_REST_API_URL)
    } 
    createUser(newUser){
        return axios.post(ADMIN_SIGNUP_BASE_REST_API_URL+"/signup", newUser)
    }
}

// eslint-disable-next-line
export default new UserService()