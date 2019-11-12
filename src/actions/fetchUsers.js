export function fetchUsers() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users')
    .then(resp =>resp.json())
    .then(users => {
     debugger
     dispatch({
        type:'FETCH_USERS',
        payload: users
    })
}
    )
}
} 