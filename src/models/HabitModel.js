import axios from 'axios';
const url = `http://localhost:5000/api/habits`
// const url = process.env.REACT_APP_API

const token = localStorage.getItem('token')

class HabitModel {
    // static getAllHabits = (userId) => {
    //     return fetch(`${url}/${userId}`)
    //         .then((response) => response.json())
    // }

    // static getHabitById = (habitId, userId) => {
    //     return fetch(`${url}/${userId}/${habitId}`)
    //         .then((response) => response.json())
    // }

    // static createHabit = (habit, userId) => {
    //     const token = localStorage.getItem('token');
    //     return fetch(`${url}/${userId}`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': token,
    //         },
    //         body: JSON.stringify(habit)
    //     })
    //         .then((response) => response.json())
    // }

    // static updateHabit = (habit, habitId, userId) => {
    //     const token = localStorage.getItem('token');
    //     return fetch(`${url}/${userId}/${habitId}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': token,
    //         },
    //         body: JSON.stringify(habit)
    //     })
    //         .then((response) => response.json())
    // }


    // static deleteHabit = (habitId, userId) => {
    //     const token = localStorage.getItem('token');
    //     return fetch(`${url}/${userId}/${habitId}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': token,
    //             },
    //         })
    //         .then((response) => response.json())
    //     } 

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

    static delete = (habit) => {
        let request = axios.delete(`${url}/${habit}`);
        return request;
      };
    
    static edit = (habit) => {
        console.log(`This is a habit from the model in edit: `, habit)
        return fetch(`${url}/${habit._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'authorization': token,
          },
          body: JSON.stringify(habit)
        })
          .then((response) => response.json())
      }

}

export default HabitModel;