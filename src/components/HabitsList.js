import React from 'react';
import Habit from './Habit';

function HabitsList(props) {
    console.log(`This is the props in HabitsList: `, props)
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
        <div className="profile-wrap">
          <div className="habits-container">
                  
                <div className="list-container">
                    Habits List:
                    {habitsList}
                </div>
        
          </div>
        </div>
    </div>
    );
}

export default HabitsList;
