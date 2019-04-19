import { createStore, applyMiddleware } from "redux";
import createSagaMiddleaware from "redux-saga";
import reducers from "./ducks";
import sagas from "./saga";
const sagaMiddleware = createSagaMiddleaware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);
export default store;
