const defaultState = {
    lala: 0,
}
const ADD_LALA = "ADD_LALA";

export const lalaReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ADD_LALA:
            return { ...state, lala: state.lala + action.payload };

        default:
            return state;
    }
}

export const addLala = (payload) => ({type: ADD_LALA, payload});