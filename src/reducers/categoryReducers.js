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


} from '../actions/categoryconstant'
const initialState = {
    loading: true,
    category: [],
    error: ''
}

export const GetCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_REQUEST:
            return {
                ...state
            }
        case CATEGORY_SUCCESS:
            return {
                loading: false,
                category: action.payload,
                error: ''
            }

        case CATEGORY_FAILURE:
            return {
                loading: false,
                category: [],
                error: true
            }
        default:
            return state
    }
}

export const PostCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_REQUEST_POST:
            return {
                ...state
            }
        case CATEGORY_SUCCESS_POST:
            return {
                loading: false,
                category: action.payload,
                error: ''
            }

        case CATEGORY_FAILURE_POST:
            return {
                loading: false,
                category: [],
                error: true
            }
        default:
            return state
    }
}

export const UpdateCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_REQUEST_UPDATE:
            return {
                ...state
            }
        case CATEGORY_SUCCESS_UPDATE:
            return {
                loading: false,
                category: action.payload,
                error: ''
            }

        case CATEGORY_FAILURE_UPDATE:
            return {
                loading: false,
                category: [],
                error: true
            }
        default:
            return state
    }
}

export const DeleteCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_REQUEST_DELETE:
            return {
                ...state
            }
        case CATEGORY_SUCCESS_DELETE:
            return {
                loading: false,
                category: action.payload,
                error: ''
            }

        case CATEGORY_FAILURE_DELETE:
            return {
                loading: false,
                category: [],
                error: true
            }
        default:
            return state
    }
}