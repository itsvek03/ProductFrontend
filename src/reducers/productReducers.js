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

} from '../actions/productconstant'
const initialState = {
    loading: true,
    product: [],
    error: ''
}

export const GetProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return {
                ...state
            }
        case PRODUCT_SUCCESS:
            return {
                success: true,
                loading: false,
                product: action.payload,
                error: ''
            }

        case PRODUCT_FAILURE:
            return {
                loading: false,
                product: [],
                error: true
            }
        default:
            return state
    }
}

export const PostProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST_POST:
            return {
                ...state
            }
        case PRODUCT_SUCCESS_POST:
            return {
                success: true,
                loading: false,
                product: action.payload,
                error: ''
            }

        case PRODUCT_FAILURE_POST:
            return {
                loading: false,
                product: [],
                error: true
            }
        default:
            return state
    }
}

export const UpdateProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST_UPDATE:
            return {
                ...state
            }
        case PRODUCT_SUCCESS_UPDATE:
            return {
                success: true,
                loading: false,
                product: action.payload,
                error: ''
            }

        case PRODUCT_FAILURE_UPDATE:
            return {
                loading: false,
                product: [],
                error: true
            }
        default:
            return state
    }
}

export const DeleteProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST_DELETE:
            return {
                ...state
            }
        case PRODUCT_SUCCESS_DELETE:
            return {
                success: true,
                loading: false,
                product: action.payload,
                error: ''
            }

        case PRODUCT_FAILURE_DELETE:
            return {
                loading: false,
                product: [],
                error: true
            }
        default:
            return state
    }
}