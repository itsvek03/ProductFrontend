import {
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_FAILURE,

    CATEGORY_REQUEST_POST,
    CATEGORY_SUCCESS_POST,
    CATEGORY_FAILURE_POST,

    CATEGORY_REQUEST_UPDATE,
    CATEGORY_SUCCESS_UPDATE,
    CATEGORY_FAILURE_UPDATE,

    CATEGORY_REQUEST_DELETE,
    CATEGORY_SUCCESS_DELETE,
    CATEGORY_FAILURE_DELETE,


} from './categoryconstant'
import { getcategory, postcategory, updatecategory, deletecategory } from '../api/categoryapi'


export const getCategoryAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CATEGORY_REQUEST
            })
            const response = await getcategory();
            console.log(response.data)
            dispatch({
                type: CATEGORY_SUCCESS,
                payload: response.data
            })

        }
        catch (err) {
            console.log(err)
            dispatch({
                type: CATEGORY_FAILURE,
                payload: err
            })
        }

    }
}

export const UpdateCategoryAction = (id, data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CATEGORY_REQUEST_UPDATE
            })
            const response = await updatecategory(id, data);
            console.log(response.data)
            dispatch({
                type: CATEGORY_SUCCESS_UPDATE,
                payload: response.data
            })
            dispatch(getCategoryAction())
        }
        catch (err) {
            console.log(err)
            dispatch({
                type: CATEGORY_FAILURE_UPDATE,
                payload: err
            })
        }

    }
}

export const postCategoryAction = (data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CATEGORY_REQUEST_POST
            })
            const response = await postcategory(data);
            console.log(response.data)
            dispatch({
                type: CATEGORY_SUCCESS_POST,
                payload: response.data
            })
            dispatch(getCategoryAction())
        }
        catch (err) {
            console.log(err)
            dispatch({
                type: CATEGORY_FAILURE_POST,
                payload: err
            })
        }

    }
}


export const DeleteCategoryAction = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CATEGORY_REQUEST_DELETE
            })
            const response = await deletecategory(id);
            console.log(response.data)
            dispatch({
                type: CATEGORY_SUCCESS_DELETE,
                payload: response.data
            })
            dispatch(getCategoryAction())
        }
        catch (err) {
            console.log(err)
            dispatch({
                type: CATEGORY_FAILURE_DELETE,
                payload: err
            })
        }

    }
}