//redux
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
//reducer
import { cashReducer } from "./cashReducer";
import { customerCashReducer } from "./customCashReducer";
import { lalaReducer } from "./lala";

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerCashReducer,
  lala: lalaReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
