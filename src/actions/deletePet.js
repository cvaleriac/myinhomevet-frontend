export const deletePet = (petId, userId) => {
    console.log(userId)
return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/${userId}/pets/${petId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(user => dispatch({type: 'DELETE_PET', payload: user}))
}
}