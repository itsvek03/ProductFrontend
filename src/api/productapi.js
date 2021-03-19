import axios from 'axios';

let config = {
    headers: {
        "Content-type": "application/json"
    }
}
export const getproduct = () => {
    return axios.get('http://localhost:8000/api/v1/product', config)
}

export const postproduct = (data) => {
    console.log("PRODUCT API DATA", data)
    return axios.post('http://localhost:8000/api/v1/product', data, config)
}

export const updateproduct = (id, data) => {
    console.log("UPDATE PRODUCT", id, data)
    return axios.patch(`http://localhost:8000/api/v1/product/${id}`, data, config)
}

export const deleteproduct = (id) => {
    return axios.delete(`http://localhost:8000/api/v1/product/${id}`, config)
}