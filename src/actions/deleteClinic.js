export const deleteClinic = (clinicId, userId) => {
    console.log(userId)
return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/${userId}/clinics/${clinicId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(user => dispatch({type: 'DELETE_CLINIC', payload: user}))
}
}