export const addClinic = (clinic, userId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/users/${userId}/clinics`, {
          method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(clinic)
      })
      .then(response => response.json())
      .then(user => {
       dispatch({type: 'ADD_CLINIC', payload: user})
        })
   }

 }