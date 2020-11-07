import React from 'react';
import Habit from './Habit';
import Profile from '../Profile/Profile';
import './HikesList.css';

function HabitsList(props) {
    console.log(`This is the props in HikeList: `, props)
    const habitsList = props.habits.filter(habitObj => habitObj.author === props.currentUser
    ).map(aHabit => {
        return(
            <Habit 
            key={aHabit._id} 
            hike={aHabit} 
            deleteHabit={props.deleteHabit}
            list={true}
            updateHabit={props.updateHabit}
            />
        )
    })
    return (
      <div className="profile-container">
         HABITS LIST
      </div>
    );
}

export default HabitsList;
