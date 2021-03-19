import axios from 'axios';

let config = {
    headers: {
        "Content-type": "application/json"
    }
}

export const getcategory = () => {
    return axios.get('http://localhost:8000/api/v1/cat', config)
}

export const postcategory = (data) => {
    return axios.post('http://localhost:8000/api/v1/cat', data, config)
}

export const updatecategory = (id, data) => {
    return axios.patch(`http://localhost:8000/api/v1/cat/${id}`, data, config)
}
export const deletecategory = (id) => {
    return axios.delete(`http://localhost:8000/api/v1/cat/${id}`, config)
}