import { createStore, applyMiddleware, compose } from "redux"
import reducer from "./reducer"
import thunkMiddleware from "redux-thunk"
import createSagaMiddleware from "redux-saga"
import sage from "./saga"

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
const storeEnhancer =  applyMiddleware(thunkMiddleware, sagaMiddleware);
const store = createStore(reducer, composeEnhancers(storeEnhancer))

sagaMiddleware.run(sage);

export default store