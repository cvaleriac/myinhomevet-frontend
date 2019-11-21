export default function userReducer(state = {users: []}, action) {

    switch(action.type) {
        case'FETCH_USERS':
        return {users: action.payload}
        
        case 'ADD_USER':
        return {...state, users: [...state.users, action.payload]}

        case 'ADD_PET':
            return {...state, users: state.users.map(user =>{
                if (user.id === action.payload.id) {
                    return action.payload
                }else{
                    return user
                }
            }

            )}
         

        case 'ADD_CLINIC':
        return {...state, users: state.users.map(user =>{
            if (user.id === action.payload.id) {
                return action.payload
            }else{
                return user
            }
        }

        )}
        
        case 'DELETE_PET':
      let user = state.users.map(user => {
        if (user.id === action.payload.id) {
          return action.payload
        } else {
          return user
        }
      })
      return {...state, users: user}

      case 'DELETE_CLINIC':
      return {...state, users: state.users.map(user =>{
        if (user.id === action.payload.id) {
            return action.payload
        }else{
            return user
        }
    }

    )}

        default:
        return state

    }
   
}