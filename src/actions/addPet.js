export const addPet = (pet, userId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/users/${userId}/pets`, {
          method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(pet)
      })
      .then(response => response.json())
      .then(user => {
          if (user.error) {
              alert(user.error)
          }else{
       dispatch({type: 'ADD_PET', payload: user})
        }
    }
        )
   }

 }