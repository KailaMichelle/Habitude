const url = `http://localhost:5000/api/users`
// const url = process.env.REACT_APP_API

class HabitModel {
    static getAllHabits = (userId) => {
        return fetch(`${url}/${userId}`)
            .then((response) => response.json())
    }

    static getHabitById = (habitId, userId) => {
        return fetch(`${url}/${userId}/${habitId}`)
            .then((response) => response.json())
    }

    static createHabit = (habit, userId) => {
        const token = localStorage.getItem('token');
        return fetch(`${url}/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(habit)
        })
            .then((response) => response.json())
    }

    static updateHabit = (habit, habitId, userId) => {
        const token = localStorage.getItem('token');
        return fetch(`${url}/${userId}/${habitId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(habit)
        })
            .then((response) => response.json())
    }


    static deleteHabit = (habitId, userId) => {
        const token = localStorage.getItem('token');
        return fetch(`${url}/${userId}/${habitId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
            })
            .then((response) => response.json())
        } 

}

export default HabitModel;