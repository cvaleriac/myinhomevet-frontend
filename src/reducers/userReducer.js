export default function userReducer(state = {users: []}, action) {

    switch(action.type) {
        case'FETCH_USERS':
        return {users: action.payload}
        
        case 'ADD_USER':
        return {...state, users: [...state.users, action.payload]}

        case 'ADD_PET':
        let users = state.users.map(user => {
          if (users.id === action.payload.id) {
            return action.payload
          } else {
            return user
            }
        })

        case 'ADD_CLINIC':
        return {...state, users: [...state.users, action.payload]}

        return {...state, users: users}
        default:
        return state

    }
   
}