import { createStore } from 'redux';

const INITIAL_STATE = {
    data: {
        columns: [
            {
                label: 'Id',
                field: 'id'
            },
            {
                label: 'Name',
                field: 'name'
            },
            {
                label: 'Username',
                field: 'username'
            },
            {
                label: 'City',
                field: 'city'
            },
            {
                label: 'E-Mail',
                field: 'email'
            },
            {
                label: 'Actions',
                field: 'actions',
                sort: 'disabled',
                width: 10
            }
        ],
        rows: []
    }
};

function user_list(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE_ROWS':
            return state;
        default:
            return state;
    }
}

const store = createStore(user_list);

export default store;