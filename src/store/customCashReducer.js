const defaultState = {
    customers: [],
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER";

export const customerCashReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload]};

        case ADD_MANY_CUSTOMER:
            return { ...state, customers: [...state.customers, ...action.payload]};

        case REMOVE_CUSTOMER:
            return { ...state, customers: state.customers.filter(item => item.id !== action.payload )};

        default:
            return state;
    }
}

export const addCusomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const addManyCusomerAction = (payload) => ({type: ADD_MANY_CUSTOMER, payload});
export const removeCusomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});