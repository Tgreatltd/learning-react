import axios from "axios";

const api= axios.create({
    baseURL:'http://127.0.0.1:4000/',
    timeout:5000
}
)

api.interceptors.request.use((config)=>{
    config.headers['Content-Type']="application/x-www-form-urlencoded";
    config.headers['Authorization']=`Bearer ${localStorage.getItem('token') || null}`
    return config
},
(error)=>{
    return Promise.reject(error)
}
)

api.interceptors.response.use((response)=>{
    return response
},
(error)=>{
    return Promise.reject(error.response.data)
}
)

export default api
