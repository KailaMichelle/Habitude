const url = `http://localhost:5000/api/users`

class UserModel {
    static getUserById = (userId) => {
        return fetch(`${url}/${userId}`)
            .then((response) => response.json())
    }
}

export default UserModel;