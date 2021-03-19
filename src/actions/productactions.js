import {
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAILURE,

    PRODUCT_REQUEST_POST,
    PRODUCT_SUCCESS_POST,
    PRODUCT_FAILURE_POST,

    PRODUCT_REQUEST_UPDATE,
    PRODUCT_SUCCESS_UPDATE,
    PRODUCT_FAILURE_UPDATE,

    PRODUCT_REQUEST_DELETE,
    PRODUCT_SUCCESS_DELETE,
    PRODUCT_FAILURE_DELETE,

} from './productconstant'
import { getproduct, postproduct, updateproduct, deleteproduct } from '../api/productapi'
//import Swal from 'sweetalert2';

export const getProductAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: PRODUCT_REQUEST
            })
            const response = await getproduct();
            console.log(response.data)
            dispatch({
                type: PRODUCT_SUCCESS,
                payload: response.data
            })

        }
        catch (err) {
            console.log(err)
            dispatch({
                type: PRODUCT_FAILURE,
                payload: err
            })
        }

    }
}



export const UpdateProductAction = (id, data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: PRODUCT_REQUEST_UPDATE
            })
            const response = await updateproduct(id, data);
            console.log(response.data)
            dispatch({
                type: PRODUCT_SUCCESS_UPDATE,
                payload: response.data
            })
            dispatch(getProductAction())
        }
        catch (err) {
            console.log(err)
            dispatch({
                type: PRODUCT_FAILURE_UPDATE,
                payload: err
            })
        }

    }
}

export const postProductAction = (data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: PRODUCT_REQUEST_POST
            })
            const response = await postproduct(data);
            console.log(response.data)
            dispatch({
                type: PRODUCT_SUCCESS_POST,
                payload: response.data
            })
            dispatch(getProductAction())
        }
        catch (err) {
            console.log(err)
            dispatch({
                type: PRODUCT_FAILURE_POST,
                payload: err
            })
        }

    }
}


export const DeleteProductAction = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: PRODUCT_REQUEST_DELETE
            })
            const response = await deleteproduct(id);
            console.log(response.data)
            dispatch({
                type: PRODUCT_SUCCESS_DELETE,
                payload: response.data
            })
            dispatch(getProductAction())
        }
        catch (err) {
            console.log(err)
            dispatch({
                type: PRODUCT_FAILURE_DELETE,
                payload: err
            })
        }

    }
}