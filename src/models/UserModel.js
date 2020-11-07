const url = `http://localhost:5000/api/user`
// const url = process.env.REACT_APP_API

class UserModel {

    static getUserById = (userId) => {
        return fetch(`${url}/${userId}`)
            .then((response) => response.json())
    }

}

export default UserModel;