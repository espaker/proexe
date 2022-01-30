import api from '../services/api'

const actions = dispatch => {
    api.get('proexe-users').then(({status, data}) => {
        if (status === 200) dispatch({type: 'UPDATE_ROWS', data})
    })
}

export default actions