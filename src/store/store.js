import { createStore } from 'redux';

const INITIAL_STATE = {
    data: []
};

function user_list(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE_ROWS':
            const newState = {...state}
            newState.data = action.data
            return newState;
        default:
            return state;
    }
}

const store = createStore(user_list);

export default store;