const url = `http://localhost:5000/api/users`
// const url = {process.env.REACT_APP_API/applicationCache/user}

class UserModel {

    static getUserById = (userId) => {
        return fetch(`${url}/${userId}`)
            .then((response) => response.json())
    }

}

export default UserModel;