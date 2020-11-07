const url = `http://localhost:4000/habits`
// const url = process.env.REACT_APP_API

class HabitModel {
    static getAllHabits = () => {
        return fetch(url)
            .then((response) => response.json())
    }

    static getHabitById = (habitId) => {
        return fetch(`${url}/${habitId}`)
            .then((response) => response.json())
    }

    static createHabit = (habit) => {
        const token = localStorage.getItem('token');
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(habit)
        })
            .then((response) => response.json())
    }

    static updateHabit = (habit, id) => {
        const token = localStorage.getItem('token');
        return fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(habit)
        })
            .then((response) => response.json())
    }


    static deleteHabit = (habitId) => {
        const token = localStorage.getItem('token');
        return fetch(`${url}/${habitId}`, {
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