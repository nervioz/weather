import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './../reducers/Reducers'

const configureStore = (init) => {
    return createStore(
        rootReducer,
        init,
        applyMiddleware(
            thunkMiddleware,
        )
    )
};

export default configureStore