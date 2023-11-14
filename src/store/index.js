//redux
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools}  from "redux-devtools-extension";
import thunk from "redux-thunk";
//reducer
import { cashReducer } from "./cashReducer";
import { customerCashReducer } from "./customCashReducer";

const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerCashReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));