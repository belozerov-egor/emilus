import { combineReducers } from 'redux'
import theme from './slices/themeSlice'
import auth from './slices/authSlice'
import {usersReducer} from './slices/usersSlice'



const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        users: usersReducer,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}

export default rootReducer
