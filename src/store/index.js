
import { GetProductReducer, PostProductReducer, UpdateProductReducer, DeleteProductReducer } from '../reducers/productReducers'
import { GetCategoryReducer } from '../reducers/categoryReducers'
import { combineReducers } from "redux";

const reducer = combineReducers({
    GetProductReducer: GetProductReducer,
    GetCategoryReducer: GetCategoryReducer,
    PostProductReducer: PostProductReducer,
    UpdateProductReducer: UpdateProductReducer,
    DeleteProductReducer: DeleteProductReducer
})

export default reducer;

