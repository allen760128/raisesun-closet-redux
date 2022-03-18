import { combineReducers } from 'redux';
import bannerReducer from './bannerReducer';
import signReducer from './signReducer';
import asyncReducer from './asyncReducer';
import proReducer from './proReducer';
import validationReducer from './validationReducer';

const rootReducer = combineReducers({
    banner: bannerReducer,
    sign: signReducer,
    async: asyncReducer,
    product: proReducer,
    validation: validationReducer
})

export default rootReducer;